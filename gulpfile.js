var gulp   = require('gulp'),
    wiredep = require('wiredep').stream,
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync'),
    connect = require('gulp-connect-php');

gulp.task('wiredep', function() {
  gulp.src('index.html')
    .pipe(wiredep({
      overrides: {
        'slick-lightbox': {
          'main': 'dist/slick-lightbox.js'
        }
      }
    }))
    .pipe(gulp.dest('.'));

  gulp.src('styles/main.css')
    .pipe(wiredep({
      overrides: {
        'bootstrap': {
          'main': 'dist/css/bootstrap.css'
        }
      },
      fileTypes: {
        css: {
          block: /(([ \t]*)\/\*\s*bower:(\S*)\s*\*\/)(\n|\r|.)*?(\/\*\s*endbower\s*\*\/)/gi,
          detect: {
            css: /@import\s['"](.+css)['"];/gi
          },
          replace: {
            css: '@import "{{filePath}}";'
          }
        }
      }
    }))
    .pipe(gulp.dest('styles/'));
})

gulp.task('js', function() {
  gulp.src('js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(minify({
      ext: {
        source: '.js',
        min: '.min.js'
      },
      noSource: true,
    }))
    .pipe(gulp.dest('js/'));
});

gulp.task('styles', function () {
  gulp.src('styles/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('styles/'));
});

gulp.task('reload', function() {
  browserSync.reload();
});

gulp.task('default', ['wiredep', 'styles', 'js'], function() {
  connect.server({
    port: 3000
  }, function () {
    browserSync.init({
      proxy: 'localhost:3000'
    });
  });

  gulp.watch('bower.json', {ignoreInitial: false}, ['wiredep']);
  gulp.watch('composer.json', {ignoreInitial: false}, ['reload']);
  gulp.watch('styles/main.css', {ignoreInitial: false}, ['styles', 'reload']);
  gulp.watch('js/main.js', {ignoreInitial: false}, ['js', 'reload']);
  gulp.watch('*.html', {ignoreInitial: false}, ['reload']);
  gulp.watch('*.php', {ignoreInitial: false}, ['reload']);
});