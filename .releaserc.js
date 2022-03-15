module.exports = {
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/github",
        ["@semantic-release/release-notes-generator", {
            "parserOpts": {
                "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
            },
            "writerOpts": {
                "commitsSort": ["subject", "scope"]
            }
        }],
        "@semantic-release/npm"
    ],
    branches: [
        'main',
        { name: 'dev', prerelease: 'alpha', channel: 'alpha' }
    ],
}
