module.exports = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  sites: [{ name: 'apac', host: 'heist-game-ui.com' }],
  publicPath: '/path/to/public/assets/', // <-- Required for sku build output
  orderImports: true,
};
