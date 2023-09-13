{
  const { setImportBuildGetters } = require('../../node_modules/.pnpm/vite-plugin-ssr@0.4.117_vite@4.3.2/node_modules/vite-plugin-ssr/dist/cjs/node/runtime/globalContext/loadImportBuild.js');
  setImportBuildGetters({
    pageFiles: () => import('./pageFiles.mjs'),
    clientManifest: () => require('../client/manifest.json'),
    pluginManifest: () => require('../client/vite-plugin-ssr.json'),
  });
}
