const generateNrConfig = require('@tokopedia/skipper/infra/newrelic/generate-config.js');

const CONSOLE_WARN_PREFIX = 'LITEWARN:';

(async () => {
  /**
   * In order to prevent any `console.warn` being logged in NR, This is the simplest way to monkey patch the console.warn
   * and adding `CONSOLE_WARN_PREFIX` that can be filtered out by NR rules.
   * For additional context, `process.stderr` gets patched internally by PM2
   * @see https://github.com/Unitech/pm2/blob/5e708459aca32903fd363230e24c37b3e38bb48d/lib/ProcessContainer.js#L173-L210
   * @todo Provide better solution than this without alter default runtime.
   */
  console.warn = console.warn.bind(console, CONSOLE_WARN_PREFIX);
  // Script for generating NR config file
  // Just before the App is launched
  await generateNrConfig({ verbose: true });

  // eslint-disable-next-line import/no-unresolved
  require('../build/server/index');
})();
