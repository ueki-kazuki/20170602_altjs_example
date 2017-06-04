var gulp = require('gulp');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-minify");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
 
gulp.task("js", function() {
    gulp.src(["ts/*.ts"])
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'index.js'
        }))
        .pipe(uglify())
        .pipe(gulp.dest("js"));
});

gulp.task('sass', function() {
  var stream = gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest('css'));
  return stream;
});

gulp.task('default', ['sass','js']);

