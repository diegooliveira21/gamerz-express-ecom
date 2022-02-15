module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ["@babel/preset-typescript", {allowDeclareFields: true}]
  ],
  plugins: [
    ['module-resolver', {
      root: ['src'],
      alias: {
        '*/*': '*/*',
      }
    }]
  ],
};