var gulp = require('gulp');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-minify");

gulp.task('hello', function() {
  console.log('Hello gulp!');
});

gulp.task('sass', function() {
  var stream = gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest('css'));
  return stream;
});

gulp.task('default', ['hello','sass']);

