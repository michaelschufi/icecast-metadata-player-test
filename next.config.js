// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE_BUNDLE === "true",
});

module.exports = withBundleAnalyzer({
  publicRuntimeConfig: {},
  future: {
    webpack5: true,
  },
});
