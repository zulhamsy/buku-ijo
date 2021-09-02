const postCssPurge = require('@fullhuman/postcss-purgecss')
const vuePath = /\.vue(\?.+)?$/

if (process.env.NODE_ENV == 'production') {
  module.exports = {
    plugins: [
      postCssPurge({
        contentFunction: (sourceInputFile) => {
          if (vuePath.test(sourceInputFile)) {
            return [sourceInputFile.replace(vuePath, '.vue')]
          }
          return ['src/**/*.vue', 'index.html']
        },
        defaultExtractor(content) {
          if (content.startsWith('<template')) {
            content = content.split('</template')[0] + '</template>'
          }

          return content.match(/[\w-/:]+(?<!:)/g) || []
        }
      })
    ]
  }
}
