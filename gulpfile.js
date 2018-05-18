"use strict";
exports.__esModule = true;
var gulp = require("gulp");
var gulp_sass = require("gulp-sass");
var gulpSourcemaps = require("gulp-sourcemaps");
var run_sequence = require("run-sequence");
var paths;
(function (paths) {
    paths["template_src"] = "./src/proj/templates/**/*";
    paths["images_src"] = "./src/proj/images/**/*";
    paths["scss_src"] = "./src/proj/scss/styles.scss";
    paths["template_dest"] = "./app/proj/templates/";
    paths["images_dest"] = "./app/proj/images/";
    paths["scss_dest"] = "./app/proj/css/";
})(paths || (paths = {}));
function CopyTemplate() {
    return gulp.src(paths.template_src).pipe(gulp.dest(paths.template_dest));
}
function CopyImages() {
    return gulp.src(paths.images_src).pipe(gulp.dest(paths.images_dest));
}
function CopyScss() {
    return gulp.src(paths.scss_src)
        .pipe(gulpSourcemaps.init())
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulpSourcemaps.write('/maps'))
        .pipe(gulp.dest(paths.scss_dest));
}
gulp.task('copy_templates', CopyTemplate);
gulp.task('copy_images', CopyImages);
gulp.task('copy_scss', CopyScss);
gulp.task('watcher', function () {
    gulp.watch(paths.template_src, CopyTemplate);
    gulp.watch(paths.images_src, CopyImages);
    gulp.watch('./src/proj/scss/**/*.scss', { delay: 300 }, CopyScss);
});
gulp.task('build', function () {
    return run_sequence(['copy_templates', 'copy_images', 'copy_scss']);
});
gulp.task('default', function () {
    return run_sequence(['copy_templates', 'copy_images', 'copy_scss', 'watcher']);
});
