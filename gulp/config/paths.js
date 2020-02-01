module.exports = {
  src: "src/**/*",
  tmp: "tmp",
  dist: "dist",
  images: {
    srcImgs: "src/images/**/*.{png,jpg,,svg}",
    tmpImgs: "tmp/images/",
    distImgs: "dist/images/"
  },
  styles: {
    srcCSS: "src/scss/**/*.scss",
    tmpCSS: "tmp/css/",
    distCSS: "dist/css/",
    injectTmpCss: "tmp/css/*.css",
    injectDistCss: "dist/css/*.min.css"
  },
  scripts: {
    srcJS: "src/scripts/**/*.js",
    tmpJS: "tmp/js/",
    distJS: "dist/js/",
    injectTmpJs: "tmp/js/*.js",
    injectDistJs: "dist/js/*.min.js"
  },
  templates: {
    srcHTML: "src/pug/**/*.pug",
    tmpIndex: "tmp/index.html",
    distIndex: "dist/index.html"
  }
}