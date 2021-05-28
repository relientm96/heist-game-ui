module.exports = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  sites: [{ name: 'apac', host: 'heist-game-ui.com' }],
  publicPath: '../', // <-- Required for sku build output
  routes: ['/'],
};
