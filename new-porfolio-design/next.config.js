const withSass = require('@zeit/next-sass') // Add this declaration
const withImages = require('next-images')
const withCSS = require('@zeit/next-css')
module.exports = withImages(
  withCSS(
    withSass({
      sassLoaderOptions: {},
      cssModules: true
    })
  )
)
