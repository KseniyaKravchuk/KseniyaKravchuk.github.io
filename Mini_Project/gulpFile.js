const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

let main_files = [
    './index.html',
    './view.html',
    './contacts',
    './style.min.css',
    './script.min.js'
];

let styleFiles = [
    './src/css/style',
    './src/css/views_style',
    './src/css/contact_style'
];

//функция, которая преобразует стили sass в css и минимизирует файл
function createStyle(done) {
    gulp.src(styleFiles)
        .pipe(concat('style'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    done();
}

function createScript(done) {
    gulp.src('./src/js/script.js')
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
    done();
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    gulp.watch('./src/css/main_style', createStyle);
    gulp.watch('./src/js/script.js', createScript);
    gulp.watch(main_files).on('change', browserSync.reload);
}

gulp.task('default', watchFiles);
gulp.task('style', createStyle);
