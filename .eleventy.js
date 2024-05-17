const now = String(Date.now())
const htmlmin = require('html-minifier')
const Image = require("@11ty/eleventy-img")

module.exports = function (eleventyConfig) {

  async function imageShortcode(src, alt, pictureClass, imgClass, sizes = "100vw") {
      if(alt === undefined) {
          // You bet we throw an error on missing alt (alt="" works okay)
          throw new Error(`Missing \`alt\` on responsiveimage from: ${src}`);
      }
  
      let metadata = await Image(src, {
          widths: [160, 640, 960, 1200, 1800, 2400],
          formats: ['webp', 'png'],
          outputDir: "./_site/static/images/",
          urlPath: "/static/images/"
      });
  
      let lowsrc = metadata.png[0];
      let highsrc = metadata.png[metadata.png.length - 1];
  
      return `<picture class="${pictureClass}">
          ${Object.values(metadata).map(imageFormat => {
          return ` <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
          }).join("\n")}
          <img
              src="${lowsrc.url}"
              width="${highsrc.width}"
              height="${highsrc.height}"
              alt="${alt}"
              class="${imgClass}"
              loading="lazy"
              decoding="async">
          </picture>`;
  }

  eleventyConfig.addWatchTarget('./src/styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/styles/tailwind.css')

  eleventyConfig.addPassthroughCopy({'./node_modules/alpinejs/dist/cdn.js': './js/alpine.js',})

  eleventyConfig.addPassthroughCopy({'./node_modules/sal.js/dist/sal.js': './js/sal.js',})
  eleventyConfig.addPassthroughCopy({'./node_modules/sal.js/dist/sal.css': './sal.css',})

  eleventyConfig.addPassthroughCopy({'src/static/meta': './',})
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/static')
  eleventyConfig.addPassthroughCopy('src/robots.txt')

  eleventyConfig.addPassthroughCopy('src/Camino-Media-Kit.zip')

  eleventyConfig.addShortcode('version', function () { return now })

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode)

  // Create collection for all elements inside posts folder
  eleventyConfig.addCollection("blogposts", function(collectionsBlogposts) {
    return collectionsBlogposts.getFilteredByGlob("./src/posts/*.{html,md}");
  });

  eleventyConfig.addCollection("spotlights", function(collectionsSpotlights) {
    return collectionsSpotlights.getFilteredByGlob("./src/spotlights/*.html");
  });

  // Minify html output
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
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
        input: "src",
        data: "data",
        layouts: "layouts",
        includes: "includes"
    }
  };
};