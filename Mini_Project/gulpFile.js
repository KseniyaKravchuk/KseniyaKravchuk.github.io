const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const del = require('del');

let main_files = [
    './build/index.html',
    './build/view.html',
    './build/contacts.html',
    './build/style.min.css',
    './build/script.min.js'
];

//все файлы стилей
let styleFiles = [
    './src/css/style',
    './src/css/views_style',
    './src/css/contact_style'
];

//все файлы pug
let HtmlFiles = [
   './pug_files/layout/main.pug',
   './pug_files/modules/footer.pug',
   './pug_files/modules/header.pug',
   './pug_files/index.pug',
   './pug_files/views.pug',
   './pug_files/contacts.pug'
];

//функция, которая удаляет из папки build все файлы, кроме папки i (папки с картинками)
function clearFolder(done) {
    del(['./build/**/*', '!./build/i']);
    done()
}

//функция, которая собирает HTML-файлы из pug
function createHTML(done) {
    gulp.src('./pug_files/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./build'));
    done();
}

//функция, которая собирает все файлы стилей в один,
// преобразует стили sass в css и минимизирует файл
function createStyle(done) {
    gulp.src(styleFiles)
        .pipe(concat('style'))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(autoprefix())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
    done();
}

//функция, которвя минимизирует js файл
function createScript(done) {
    gulp.src('./src/js/script.js')
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
    done();
}

//функция, которая запускает сервер, следит за изменениями в файлах проекта
//и обновляет браузер автоматически (если в файлах произошли изменения)
function watchFiles() {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        port: 3000
    });
    gulp.watch(styleFiles, createStyle);
    gulp.watch('./src/js/script.js', createScript);
    gulp.watch(HtmlFiles, createHTML);
    gulp.watch(main_files).on('change', browserSync.reload);
}

gulp.task('default', watchFiles);
gulp.task('style', createStyle);
gulp.task('script', createScript);
gulp.task('pug', createHTML);
gulp.task('delete', clearFolder);
gulp.task('createProject', gulp.series(clearFolder, createStyle, createScript, createHTML));
