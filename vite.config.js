import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import legacy from '@vitejs/plugin-legacy';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { preloadImg } from './src/preloadImg';
// https://vite.dev/config/
export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
    },
    plugins: [
        vue(),
        preloadImg({
            dir: 'src/assets/**/*.{jpg,png,svg,webp,mp4}',
            attrs: {
                rel: 'preload',
            },
        }),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia'],
            dts: 'src/types/auto-imports.d.ts',
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        legacy({
            targets: ['defaults', 'not IE 11'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        }),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
