module.exports = {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/release-notes-generator',
      {
        writerOpts: {
          transform: (commit, context) => {
            const message = `${commit.scope}: ${commit.subject} [${commit.scope}](https://sample.com/${commit.scope})`;

            const typeMap = {
              feat: 'Features',
              fix: 'Bug Fixes',
              chore: 'Chores',
              docs: 'Documentation',
              refactor: 'Code Refactoring',
              perf: 'Performance Improvements'
            };

            const section = typeMap[commit.type] || commit.type;

            return {
              ...commit,
              message,
              section
            };
          },
          mainTemplate: `# Changelog\n\n## {{version}} ({{date}})\n\n{{#each commitGroups}}\n### {{this.title}}\n{{#each this.commits}}\n  * {{this.message}}\n{{/each}}\n\n{{/each}}`,
          commitTemplate: `{{message}}`,
          groupBy: 'section',
          commitsSort: ['scope', 'subject']
        }
      }
    ],
    '@semantic-release/changelog',
    '@semantic-release/git',
    '@semantic-release/github'
  ]
};