module.exports = {
  reactStrictMode: false,
  env: {
    APP_ENV: 'develoment',
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/(|jclues)',
          destination: '/'
        },
      ]
    };
  }
}
