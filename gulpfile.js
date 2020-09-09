const { src, dest, parallel, series, watch} = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps')
// var cssnano = require('gulp-cssnano');
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('./webpack.config.js')
const browserSync = require('browser-sync').create()
var autoprefixer = require('autoprefixer')
function html(done) {
    src('src/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
    done()
}
function assets(done) {
    src('src/assets/**')
    .pipe(dest('dist/assets'))
    done()
}
function styles(done) {
    src('src/sass/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))    
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/css'))
    
    .pipe(browserSync.stream())
    done();
}
function scripts(done) {
    src('src/js/**')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(dest('dist/js'))
        .pipe(browserSync.stream())
        done()   
}
function serve(done) {
    browserSync.init({
        server: 'dist'
    }, done)
}

function watchTask(done) {
    watch('src/assets/**', series(assets))
    watch('src/js/**', series(scripts))
    watch('src/sass/**', series(styles))
    watch('src/index.html', series(html))
    done()
}


exports.watch = watchTask
exports.scripts = scripts
exports.styles = styles
exports.serve = serve
exports.build = parallel(styles, scripts, assets, html)
exports.default = series(serve, watchTask)
