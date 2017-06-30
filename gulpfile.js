const gulp   = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const concatCss = require('gulp-concat-css');

gulp.task('js', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(minify({
      noSource: true
    }))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', () => {
  return gulp.src('styles/*.css')
    .pipe(concatCss('dist/styles/main.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/styles/main.css'));
});
 
gulp.task('default', ['js', 'styles']);