const {
    src,
    dest,
    series,
    watch,
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const sync = require('browser-sync').create();

function html() {
    return src('src/**.html')
        .pipe(include({
            prefix: '@@',
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(dest('dist'))
}

function img() {
    return src('src/img/**.{jpg,png}')
        .pipe(dest('dist/img'))
}


function scss() {
    return src('src/styles/**.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
        .pipe(csso())
        .pipe(concat('index.css'))
        .pipe(dest('dist/styles'))
}

function font() {
    return src('src/font-awesome-4.7.0/**/*')
        .pipe(dest('dist/font-awesome-4.7.0'))
}

function resetcss() {
    return src('src/styles/reset.css')
        .pipe(concat('reset.css'))
        .pipe(dest('dist/styles'))
}

function script() {
    return src('src/script/*.js')
        .pipe(dest('dist/script'))
}


function serve() {
    sync.init({
        server: './dist'
    })

    watch('src/**.html', series(html)).on('change', sync.reload)
    watch('src/parts/**.html', series(html)).on('change', sync.reload)
    watch('src/styles/**.scss', series(scss)).on('change', sync.reload)
    watch('src/script/**.js', series(script)).on('change', sync.reload)

}

exports.start = series(script, resetcss, font, html, scss, img, serve);