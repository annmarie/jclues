module.exports = {
  reactStrictMode: false,
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
