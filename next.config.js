// eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires

const withTM = require("next-transpile-modules")([
  "icecast-metadata-player",
  "mse-audio-wrapper",
  "codec-parser",
]);

module.exports = withTM({
  publicRuntimeConfig: {},
  eslint: {
    ignoreDuringBuilds: true,
  },
});
