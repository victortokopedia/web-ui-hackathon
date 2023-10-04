const define = require('@tokopedia/skipper/cli/config/define-config');

module.exports = define({
  babel: {
    server: {
      plugins: [['@emotion/babel-plugin']],
      skipperPresetOptions: {
        importSource: '@emotion/react',
      },
    },
    client: {
      plugins: [['@emotion/babel-plugin']],
      skipperPresetOptions: {
        importSource: '@emotion/react',
      },
    },
  },
  globalCSS: false,
  transpilePackages: ['@nest-ui/core', '@nest-ui/icon'],
});
