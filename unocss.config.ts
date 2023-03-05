import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#5983FF',
      secondary: '#ffaa00',
      surface: '#ffaa00',
      bg: '#ffffff',
      success: '#ffaa00',
      info: '#ffaa00',
      warn: '#FA665E',
      error: '#FA665E',
      divider: '#989898',
      on: {
        primary: '#ffffff',
        secondary: '#ffffff',
        bg: {
          1: '#121212',
          2: '#545454',
        },
        success: '#ffaa00',
        info: '#ffaa00',
        warn: '#FA665E',
        error: '#ffffff',
      },
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      // fonts: {
      //   sans: 'DM Sans',
      //   serif: ['DM Serif Display', 'Source Serif Pro'],
      //   mono: 'DM Mono',
      //   helvetica: 'Helvetica',
      // },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
