module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        unoptimized: true,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: ['img.shields.io']
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                fs: false
            }
        }
        return config
    }
}
