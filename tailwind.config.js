const path = require('path')
const plugin = require('tailwindcss/plugin')
const buildSelectorVariant = require('tailwindcss/lib/util/buildSelectorVariant').default

module.exports = {
  purge: [path.resolve(__dirname, './tailwind.html')],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('lib', ({ container, separator, modifySelectors }) => {
        modifySelectors(({ selector }) => {
          return buildSelectorVariant(selector, 'lib', separator, (message) => {
            throw container.error(message)
          })
        })
      })
    }),
  ],
}
