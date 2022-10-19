const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const { src, dest, watch, series } = require("gulp");

function buildStyles() {
  return src("sass/**/*.scss")
    .pipe(sass())
    .pipe(rename("styles.css"))
    .pipe(dest("css/"));
}

function watchScss() {
  watch(["sass/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchScss);
