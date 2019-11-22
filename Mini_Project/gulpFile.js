const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');

let main_files = [
    './index.html',
    './style.min.css',
    './script.min.js'
];

//функция, которая преобразует стили sass в css и минимизирует файл
function createStyle(done) {
    gulp.src('./src/css/style')
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

function browserReload(done) {
    browserSync.reload();
    done();
}

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    gulp.watch('./src/css/style', createStyle);
    gulp.watch('./src/js/script.js', createScript);

    gulp.watch(main_files).on('change', browserSync.reload);
}

gulp.task('default', watchFiles);
