import fg from 'fast-glob';
export const preloadImg = (options) => {
    const { dir, attrs = {} } = options;
    const assetsImages = [];
    // console.log(dir)
    // console.log(options)
    // console.log('Plugin function called')
    return {
        name: 'vite-plugin-image-prefetch',
        generateBundle(_, bundle) {
            const values = Object.values(bundle);
            const files = fg.sync(dir);
            values.forEach((item) => {
                if (files.includes(Reflect.get(item, 'originalFileName'))) {
                    assetsImages.push(item.fileName);
                }
            });
            console.log(assetsImages);
        },
        transformIndexHtml(html, ctx) {
            let images = [];
            if (ctx.server) {
                const files = fg.sync(dir);
                const base = ctx.server?.config.base || '';
                images = files.map((file) => base + file);
            }
            else {
                images = assetsImages;
            }
            console.log(images);
            return images.map((href) => {
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
