import path from 'node:path'
import { Config } from '@remotion/cli/config'
import { enableTailwind } from '@remotion/tailwind-v4'

// Rendering bundles with webpack rather than Vite; give it the same Tailwind and `@/` alias as the preview.
Config.overrideWebpackConfig((config) => {
  const withTailwind = enableTailwind(config)
  return {
    ...withTailwind,
    resolve: {
      ...withTailwind.resolve,
      alias: { ...withTailwind.resolve?.alias, '@': path.resolve(process.cwd(), 'src') },
    },
  }
})
Config.setVideoImageFormat('jpeg')
