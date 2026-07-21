import { defineConfig } from '@tanstack/start/config';
import tailwindcss from '@tailwindcss/vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig({
  tsr: {
    appDirectory: './src',
    routesDirectory: './src/routes',
  },
  vite: {
    plugins: [
      tsConfigPaths(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
        'node:async_hooks': path.resolve(process.cwd(), 'src/lib/async-hooks-mock.ts'),
        'async_hooks': path.resolve(process.cwd(), 'src/lib/async-hooks-mock.ts'),
      },
    },
  },
});
