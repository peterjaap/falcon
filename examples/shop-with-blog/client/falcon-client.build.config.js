const { razzlePluginFalconClient } = require('@deity/falcon-client');

module.exports = {
  clearConsole: true,
  i18n: {
    resourcePackages: ['@deity/falcon-i18n'],
    filter: { lng: ['en'] }
  },
  plugins: [razzlePluginFalconClient()]
};
