const gulp = require('gulp');
const pug = require('gulp-pug');

function createHTML() {
    return gulp.src('./pug_files/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'));
}

gulp.task('pug', createHTML);