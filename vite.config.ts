import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({ jsxImportSource: '@emotion/react', babel: { plugins: ['@emotion/babel-plugin'] } })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:7777',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    },
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            { find: '@lib', replacement: '/src/lib' },
            { find: '@routes', replacement: '/src/routes' },
            { find: '@tokens', replacement: '/src/tokens' },
            { find: '@components', replacement: '/src/components' },
            { find: '@feature', replacement: '/src/feature' },
            { find: '@type', replacement: '/src/type' },
            { find: '@styles', replacement: '/src/styles' }
        ]
    }
});
