const nextConfig = {
    output: 'export',
    basePath: process.env.GITHUB_PAGES === 'true' ? '/portfolio-2' : '',
    assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/portfolio-2' : '',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    skipTrailingSlashRedirect: true
}

module.exports = nextConfig