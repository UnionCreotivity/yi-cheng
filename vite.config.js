import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import legacy from '@vitejs/plugin-legacy';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import fg from 'fast-glob';
const preloadImages = (optons) => {
    const { dir, attrs = {} } = optons;
    return {
        name: 'vite-plugin-image-prefetch',
        transformIndexHtml(_html, ctx) {
            let images = fg.sync(dir, {
                cwd: ctx.server?.config.publicDir,
            }); // 拿到目录下所有的图片路径
            images = images.map((file) => ctx.server?.config.base + file);
            return images.map((href) => {
                console.log(href);
                return {
                    tag: 'link',
                    attrs: {
                        rel: 'prefetch',
                        href: href,
                        as: 'image',
                        ...attrs,
                    },
                };
            });
        },
    };
};
// https://vite.dev/config/
export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
    },
    plugins: [
        vue(),
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
        preloadImages({
            dir: '**.{jpg,png,svg,jpeg}',
            attrs: {
                rel: 'preload',
            },
        }),
        vueDevTools(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
});
