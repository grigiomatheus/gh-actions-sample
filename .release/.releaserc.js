module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
      },
    ],
    [
      'semantic-release-jira-notes',
      {
        jiraHost: 'atlassian.net',
        ticketPrefixes: ['TEST', 'test'],
      },
    ],
    '@semantic-release/github',
  ],
};
