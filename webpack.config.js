const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { AureliaPlugin, ModuleDependenciesPlugin } = require("aurelia-webpack-plugin");
const { optimize: { CommonsChunkPlugin }, DefinePlugin, ProvidePlugin, ContextReplacementPlugin } = require("webpack");
const { TsConfigPathsPlugin, CheckerPlugin } = require("awesome-typescript-loader");

// config helpers
const ensureArray = (config) => config && (Array.isArray(config) ? config : [config]) || [];
const when = (condition, config, negativeConfig) =>
  condition ? ensureArray(config) : ensureArray(negativeConfig);

// env config
const appConfig = require("./app.config");

// primary config
const title = "Aurelia Webpack Starter";
const outDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");
const nodeModulesDir = path.resolve(__dirname, "node_modules");
const baseUrl = "/";

const cssRules = [
  { loader: "css-loader" }
];
const sassRules = [
  { loader: "css-loader" },
  { loader: "sass-loader" }
];

module.exports = ({ production, server, extractCss } = {}) => ({
  resolve: {
    extensions: [".ts", ".js"],
    modules: [srcDir, "node_modules"],
    alias: {
      "attributes": path.resolve("src/attributes"),
      "components": path.resolve("src/components"),
      "modals": path.resolve("src/modals")
    }
  },
  entry: {
    app: ["aurelia-bootstrapper"],
    vendor: ["bluebird"]
  },
  output: {
    path: outDir,
    publicPath: baseUrl,
    filename: production ? "[name].[chunkhash].bundle.js" : "[name].[hash].bundle.js",
    sourceMapFilename: production ? "[name].[chunkhash].bundle.map" : "[name].[hash].bundle.map",
    chunkFilename: production ? "[name].[chunkhash].chunk.js" : "[name].[hash].chunk.js",
  },
  devServer: {
    contentBase: outDir,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        issuer: [{ not: [{ test: /\.html$/i }] }],
        use: extractCss
          ? ExtractTextPlugin.extract({ fallback: "style-loader", use: cssRules })
          : ["style-loader", ...cssRules]
      },
      {
        test: /\.scss$/i,
        issuer: [{ not: [{ test: /\.html$/i }] }],
        use: extractCss
          ? ExtractTextPlugin.extract({ fallback: "style-loader", use: sassRules })
          : ["style-loader", ...sassRules]
      },
      {
        test: /\.css$/i,
        issuer: [{ test: /\.html$/i }],
        use: cssRules
      },
      { test: /\.html$/i, loader: "html-loader" },
      { test: /\.ts$/i, loader: "awesome-typescript-loader", exclude: nodeModulesDir },
      { test: require.resolve("bluebird"), loader: "expose-loader", options: "Promise" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ["file-loader?hash=sha512&digest=hex&name=[hash].[ext]", "image-webpack-loader"] },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader", options: { limit: 10000, mimetype: "application/font-woff2" } },
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader", options: { limit: 10000, mimetype: "application/font-woff" } },
      { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader", options: { limit: 10000 } }
    ]
  },
  plugins: [
    new AureliaPlugin(),
    new ProvidePlugin({
      "Promise": "bluebird"
    }),
    new DefinePlugin({
      ENV: production ? JSON.stringify(appConfig.prduction) : JSON.stringify(appConfig.development)
    }),
    new TsConfigPathsPlugin(),
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: "index.ejs",
      minify: production ? {
        removeComments: true,
        collapseWhitespace: true
      } : undefined,
      metadata: {
        title, server, baseUrl
      }
    }),
    new CopyWebpackPlugin([
      { from: "static/favicon.png", to: "favicon.png" }
    ]),
    ...when(extractCss, new ExtractTextPlugin({ filename: "[contenthash].css", allChunks: true }))
  ]
});
