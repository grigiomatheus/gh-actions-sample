module.exports = {
  branches: ['master'],
  plugins: [
     [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'hotfix', release: 'patch' },
          { type: 'breaking', release: 'major' },
          { type: 'update', release: 'minor' },
          { type: 'chore', release: false },
          { type: 'custom', release: 'major' }
        ]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        writerOpts: {
          transform: (commit, context) => {
            if (!commit.type) return;

            const message = `${commit.scope}: ${commit.subject} [${commit.scope}](https://google.com/browse/${commit.scope.toUpperCase()})`;

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
          mainTemplate: `## {{version}} ({{date}})\n\n{{#each commitGroups}}\n### {{this.title}}\n{{#each this.commits}}\n  * {{this.message}}\n{{/each}}\n\n{{/each}}`,
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
