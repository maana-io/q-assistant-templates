/**
 * Configuration for Webpack watch
 *
 * Outputs generated files to ./build directory
 *
 * Does not generate a ServiceWorker
 */

const paths = require('react-scripts/config/paths');

// override this so that the static paths resolve correctly
paths.publicUrlOrPath = "./"

const configFactory = require('react-scripts/config/webpack.config');

const config = configFactory(process.env.NODE_ENV || "development");
config.output.path = paths.appBuild;

// Generate configuration
module.exports = config;
