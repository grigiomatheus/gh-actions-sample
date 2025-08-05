module.exports = {
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "conventionalcommits"
            }
        ],
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "conventionalcommits",
                presetConfig: {
                    issuePrefixes: ["TEST-", "test-"]
                },
                parserOpts: {
                    issuePrefixes: ["TEST-", "test-"]
                },
                writerOpts: {
                    transform: {
                        commit: (commit, context) => {
                            if (commit.scope && /^TEST-|^test-/.test(commit.scope)) {
                                const fakeRef = {
                                    issue: `[${commit.scope}](https://atlassian.net/browse/${commit.scope})`,
                                    raw: commit.scope
                                };
                                commit.references = [...(commit.references || []), fakeRef];
                            }
                            return commit;
                        },
                        references: (references, context) => {
                            return references.map(ref => ({
                                ...ref,
                                issue: `[${ref.issue}](https://atlassian.net/browse/${ref.issue})`
                            }));
                        }
                    }
                }
            }
        ],
        "@semantic-release/github"
    ]
}
