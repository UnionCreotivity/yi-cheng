import type { Plugin } from 'vite';
type PreloadImagesOptions = {
    dir: string;
    attrs: {
        rel: 'preload' | 'prefetch';
    };
};
export declare const preloadImg: (options: PreloadImagesOptions) => Plugin;
export {};
