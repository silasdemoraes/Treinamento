module.exports = function (api) {
  api.cache(false);

  const presets = [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ];

  const plugins = [
    ["@babel/plugin-transform-typescript"],
    ["@babel/plugin-transform-modules-commonjs"],
    ["@babel/plugin-proposal-async-generator-functions"],
    ["@babel/plugin-proposal-optional-catch-binding"],
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],//must be after 
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@database': './src/database',
        '@dto': './src/dto',
        '@models': './src/models',
        '@modules': './src/modules',
        '@routes': './src/routes',
        "@repositories": "./src/repositories",
        "@services": "./src/services",
        "@util": "./src/util",
        '@app': './src/app',
        '@server': "./src/server",
        '@types': "./src/shared/config/Types",
        "@container": "./src/shared/config/Container",
        "@config/*": "./src/shared/config/*",
        "@provider/*": "./src/shared/provider/*",
        "@util/*": "./src/shared/util/*",
        "@transformers/*": "./src/shared/transformers/*",
        "@validators/*": "./src/shared/validators/*",
        "@database/*": "./src/shared/database/*",
        "@models/*": "./src/main/models/*",
        "@dto/*": "./src/main/dto/*",
        "@errors/*": "./src/shared/errors/*",
        "@repositories/*": "./src/main/repositories/*",
        "@useCases/*": "./src/main/useCases/*",
        "@pages/*": "./src/main/pages/*",
        "@views/*": "./src/main/views/*",
        "@controllers/*": "./src/main/controllers/*",
        "@app": "./src/shared/http/app"
      }
    }]
  ];

  const ignore = ['**/*.spec.ts'];

  return {
    presets,
    plugins,
    ignore
  };
}

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [

  ],
};