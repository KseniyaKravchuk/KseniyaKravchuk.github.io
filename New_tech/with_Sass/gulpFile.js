var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

//функция, которая преобразует стили sass в css и минимизирует файл
function createStyle(done) {
    gulp.src('./style')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./'));
    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}

function watchFiles() {
    gulp.watch('./style', createStyle);
    gulp.watch('./**/*', browserReload);
}

gulp.task(watchFiles);
