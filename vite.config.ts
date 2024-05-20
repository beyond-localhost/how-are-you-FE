import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
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
            { find: '@styles', replacement: '/src/styles' },
            { find: '@components', replacement: '/src/components' }
        ]
    }
});
