import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'header_provider',
      exposes: {
        './header': './src/Header.tsx',
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
    port: 3000,
  },
});
