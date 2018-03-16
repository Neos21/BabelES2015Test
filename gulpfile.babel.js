import gulp            from "gulp"
import gulpLoadPlugins from "gulp-load-plugins"

// Gulp プラグインを一括で読込
const $ = gulpLoadPlugins();

/**
 * デフォルトタスク
 */
gulp.task("default", ["watch"]);

/**
 * src/scripts/ 配下の js ファイルに変更があったら build タスクを呼ぶ
 */
gulp.task("watch", function() {
  gulp.watch("src/scripts/**/*.js", ["build"]);
});

/**
 * src/scripts/ 配下の全ての js ファイルをコンパイルし dist/scripts/ に格納する
 */
gulp.task("build", () =>
  gulp.src("src/scripts/**/*.js")         // src/scripts/ 配下の全ての js ファイルを対象にする
      .pipe($.plumber())                  // gulp-plumber をかませてファイル変更時のエラー回避
      .pipe($.babel())                    // gul-babel で Babel によるトランスパイル
      .pipe(gulp.dest("dist/scripts"))    // dist/scripts/ 配下に格納する
);
