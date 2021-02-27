const gulp = require("gulp")
const sass = require('gulp-sass')
const minifyCSS = require('gulp-minify-css')
const del = require('del');

gulp.task("sass", async function() {
  await del(['dist/css']);    
  return gulp.src("components/css/**/*.scss")    
    .pipe(sass())
    .pipe(minifyCSS())    
    .pipe(gulp.dest("dist/css"))
})