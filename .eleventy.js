const now = String(Date.now())
const htmlmin = require('html-minifier')

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/styles/tailwind.css')

  eleventyConfig.addPassthroughCopy({'./node_modules/alpinejs/dist/cdn.js': './js/alpine.js',})
  eleventyConfig.addPassthroughCopy({'./node_modules/sal.js/dist/sal.js': './js/sal.js',})
  eleventyConfig.addPassthroughCopy({'./node_modules/sal.js/dist/sal.css': './sal.css',})

  eleventyConfig.addPassthroughCopy('src/static')
  eleventyConfig.addPassthroughCopy('robots.txt')

  eleventyConfig.addPassthroughCopy('src/Camino-Media-Kit.zip')

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified
    }

        return content
    })
  
  return {
    htmlTemplateEngine: "njk",
    dir: {
        input: "src",
        data: "data",
        layouts: "layouts",
        includes: "includes"
    }
  };
};