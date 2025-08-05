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
