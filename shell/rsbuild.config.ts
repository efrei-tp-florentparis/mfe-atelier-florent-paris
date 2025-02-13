import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'federation_consumer',
      remotes: {
        header_provider:
          'header_provider@http://localhost:3000/mf-manifest.json',
        footer_provider:
          'footer_provider@http://localhost:3001/mf-manifest.json',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '~18.2.0',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '~18.2.0',
          eager: true,
        },
      },
    }),
  ],
  server: {
    port: 2000,
  },
});
