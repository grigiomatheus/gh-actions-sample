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
                    issuePrefixes: ["TEST-", "test-"],
                    commitPattern: "^(\\w*)(?:\\((TEST-\\d+|test-\\w+)\\))?: (.*)$",
                    headerCorrespondence: ["type", "issue", "subject"]
                },
                writerOpts: {
                    transform: {
                        references: (references, context) => {
                            return references.map(ref => ({
                                ...ref,
                                issue: `[${ref.issue}](https://atlassian.net/browse/${ref.issue})`
                            }))
                        }
                    }
                }
            }
        ],
        "@semantic-release/github"
    ]
}
