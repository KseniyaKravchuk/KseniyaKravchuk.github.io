const gulp = require('gulp');
const pug = require('gulp-pug');
const version = require('gulp-version-number');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const purgecss = require('gulp-purgecss'); //удаляет все неиспользуемые стили
const uglifyCSS = require('gulp-uglifycss');
const del = require('del');

const mainPugFiles = [
    './pug_files/index.pug',
    './pug_files/views.pug',
    './pug_files/contacts.pug'
];

const versionConfig = {
    value: '%MDS%',
    append: {
        key: 'v',
        to: [{
            'type': 'css',
            'files': ['style.min.css', 'custom.min.css']
        },
            {
                'type': 'js',
                'files': ['script.min.js']
            }
        ]
    },
};

const projectFiles = [
    '*.html',
    'cases/*.html',
    'js/script.min.js',
    'css/style.min.css',
    'css/custom.min.css'
];

function clearFolder() {
    return del(projectFiles)
}

function minJs() {
    return gulp.src('./js/script.js')
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./js/'))
}

function updateCSS() {
    return gulp.src(['./css/style.css', './css/custom.css'])
        .pipe(purgecss({
            content: ['*.html', 'cases/*.html']
        }))
        .pipe(uglifyCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'))
}

function createHTML() {
    return gulp.src('./pug_files/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(version(versionConfig))
        .pipe(gulp.dest('./'));
}

function createHTMLcases() {
    return gulp.src('./pug_files/cases/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(version(versionConfig))
        .pipe(gulp.dest('./cases/'));
}

gulp.task('pug', gulp.series(minJs, gulp.parallel(createHTML, createHTMLcases), updateCSS));
gulp.task('clean', clearFolder);