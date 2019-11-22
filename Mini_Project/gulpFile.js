var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

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
    gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch('./**/*.js').on('change', browserSync.reload);
}

gulp.task('default', watchFiles);
