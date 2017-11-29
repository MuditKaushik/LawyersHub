import * as gulp from 'gulp';
import * as run_sequence from 'run-sequence';

enum paths {
    template_src = './src/proj/templates/**/*',
    images_src = './src/proj/images/**/*',
    template_dest = './app/proj/templates/',
    images_dest = './app/proj/images/'
};

gulp.task("copy_templates", () => {
    return gulp.src(paths.template_src).pipe(gulp.dest(paths.template_dest));
});

gulp.task("copy_images", () => {
    return gulp.src(paths.images_src).pipe(gulp.dest(paths.images_dest));
});

gulp.task("watcher", () => {
    gulp.watch(paths.template_src, () => {
        return gulp.src(paths.template_src).pipe(gulp.dest(paths.template_dest));
    });
    gulp.watch(paths.images_src, () => {
        return gulp.src(paths.images_src).pipe(gulp.dest(paths.images_dest));
    });
});

gulp.task("build", () => {
    return run_sequence(["copy_templates", "copy_images"]);
});

gulp.task("default", () => {
    return run_sequence(["copy_templates", "copy_images", "watcher"]);
});