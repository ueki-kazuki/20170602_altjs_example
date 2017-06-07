var gulp = require('gulp');
var scss = require("gulp-scss");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-minify");
var ts = require("gulp-typescript");
var uglify = require("gulp-uglify");
var connect = require('gulp-connect');
 
gulp.task("js", function() {
    gulp.src(["ts/*.ts"])
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'index.js'
        }))
        .pipe(uglify())
        .pipe(gulp.dest("js"));
});

gulp.task('scss', function() {
  var stream = gulp.src('scss/*.scss')
    .pipe(scss())
    .pipe(autoprefixer())
    .pipe(minify())
    .pipe(gulp.dest('css'));
  return stream;
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
 
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

//gulp.task('default', ['scss','js']);
gulp.task("watch", function() {
    gulp.watch(["ts/*.ts"],["js"]);
    gulp.watch("scss/*.scss",["scss"]);
    gulp.watch(['./*.html'], ['html']);
});

gulp.task("default", ['connect', 'watch']);
