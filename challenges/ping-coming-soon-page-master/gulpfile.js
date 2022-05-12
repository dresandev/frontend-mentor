const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function css() {
  return gulp
    .src('assets/scss/*.scss')
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
}

function watchFiles() {
  gulp.watch('assets/scss/*.scss', css)
}

gulp.task('css', css)
gulp.task('watch', watchFiles)
