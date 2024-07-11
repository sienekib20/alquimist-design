const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const header = require('gulp-header');
const package = require('./package.json');
const watch = require('gulp-watch');

const banner = `
/*!
 * ${package.name}
 * Author: ${package.author}
 * Email: ${package.email}
 * Version: ${package.version}
 * Description: ${package.description}
 */
`;

function compileSass() {
   return gulp.src('scss/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
      .pipe(header(banner))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'));
}

function minifySass() {
   return gulp.src('scss/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(header(banner))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'));
}

function watchSass() {
   watch('scss/**/*.scss', gulp.series(compileSass, minifySass));
}

gulp.task('sass', compileSass);
gulp.task('sass:min', minifySass);
gulp.task('watch', watchSass);

gulp.task('default', gulp.series('sass', 'sass:min', 'watch'));
