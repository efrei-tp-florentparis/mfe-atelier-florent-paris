import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'footer_provider',
      exposes: {
        './footer': './src/Footer.tsx',
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
    port: 3001,
  },
});
