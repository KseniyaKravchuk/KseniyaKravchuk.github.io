const gulp = require('gulp');
const pug = require('gulp-pug');

const mainPugFiles = [
    './pug_files/index.pug',
    './pug_files/views.pug',
    './pug_files/contacts.pug'
]


function createHTML() {
    return gulp.src('./pug_files/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./'));
}

function createHTMLcases() {
    return gulp.src('./pug_files/cases/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./cases/'));
}

gulp.task('pug', gulp.parallel(createHTML, createHTMLcases));