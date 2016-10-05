import gulp from "gulp"
import gulpLoadPlugins from "gulp-load-plugins"

const $ = gulpLoadPlugins();

// src/scripts/ 配下の全ての js ファイルをコンパイルし dist/scripts/ に格納する
gulp.task("build", () =>
  gulp.src("src/scripts/**/*.js")
  .pipe($.babel())
  .pipe(gulp.dest("dist/scripts"))
);