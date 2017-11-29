"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gulp = require("gulp");
var run_sequence = require("run-sequence");
var paths;
(function (paths) {
    paths["template_src"] = "./src/proj/templates/**/*";
    paths["images_src"] = "./src/proj/images/**/*";
    paths["template_dest"] = "./app/proj/templates/";
    paths["images_dest"] = "./app/proj/images/";
})(paths || (paths = {}));
;
gulp.task("copy_templates", function () {
    return gulp.src(paths.template_src).pipe(gulp.dest(paths.template_dest));
});
gulp.task("copy_images", function () {
    return gulp.src(paths.images_src).pipe(gulp.dest(paths.images_dest));
});
gulp.task("watcher", function () {
    gulp.watch(paths.template_src, function () {
        return gulp.src(paths.template_src).pipe(gulp.dest(paths.template_dest));
    });
    gulp.watch(paths.images_src, function () {
        return gulp.src(paths.images_src).pipe(gulp.dest(paths.images_dest));
    });
});
gulp.task("build", function () {
    return run_sequence(["copy_templates", "copy_images"]);
});
gulp.task("default", function () {
    return run_sequence(["copy_templates", "copy_images", "watcher"]);
});
