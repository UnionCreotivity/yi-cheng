import type { Plugin } from 'vite'
import fg from 'fast-glob'

type PreloadImagesOptions = {
  dir: string
  attrs: {
    rel: 'preload' | 'prefetch'
  }
}

export const preloadImg = (options: PreloadImagesOptions): Plugin => {
  const { dir, attrs = {} } = options
  const assetsImages: string[] = []
  return {
    name: 'vite-plugin-image-prefetch',
    generateBundle(_, bundle) {
      const values = Object.values(bundle)
      const files = fg.sync(dir)

      values.forEach((item) => {
        if (files.includes(Reflect.get(item, 'originalFileName'))) {
          assetsImages.push(item.fileName)
        }
      })
    },
    transformIndexHtml(html, ctx) {
      let images: string[] = []
      if (ctx.server) {
        const files = fg.sync(dir)
        const base = ctx.server?.config.base || ''

        images = files.map((file) => base + file)
      } else {
        images = assetsImages
      }
      return images.map((href) => {
        if (href.includes('mp4')) {
          return {
            tag: 'link',
            attrs: {
              rel: 'prefetch',
              href: href,
              as: 'fetch',
              fetchpriority: 'high',
              crossorigin: 'anonymous',
              ...attrs,
            },
          }
        }
        return {
          tag: 'link',
          attrs: {
            rel: 'prefetch',
            href: href,
            as: 'image',
            ...attrs,
          },
        }
      })
    },
  }
}
