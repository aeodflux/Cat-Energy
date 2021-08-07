const { src, dest, series, watch } = require('gulp')
const gulp = require('gulp')
const sync = require('browser-sync').create();
const del = require('del')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');

const clear = () => del('dist')

const html = () => src('src/**.html')
  .pipe(dest('dist'))
const imgs = () => src('src/img/**')
  .pipe(imagemin())
  .pipe(dest('dist/img/'))
const scss = () => src('src/scss/style.scss')
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(csso())
  .pipe(dest('dist'))
const jscript = () => src('src/js/**')
  .pipe(dest('dist'))

const serve = () => {
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/scss/**scss', series(scss)).on('change', sync.reload)
  watch('src/js/**.js', series(jscript)).on('change', sync.reload)
  watch('src/img/*.*', series(imgs)).on('change', sync.reload)
}


const build = gulp.series(clear, html, imgs, jscript, scss);

exports.default = gulp.series(clear, scss, html, imgs, jscript, serve)
exports.build = build
exports.clear = clear
