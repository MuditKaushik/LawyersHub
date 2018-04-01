import * as gulp from 'gulp';
import * as run_sequence from 'run-sequence';
import * as gulp_sass from 'gulp-sass';

enum paths {
    template_src = './src/proj/templates/**/*',
    images_src = './src/proj/images/**/*',
    scss_src = './src/proj/scss/styles.scss',
    template_dest = './app/proj/templates/',
    images_dest = './app/proj/images/',
    scss_dest = './app/proj/css/',
}
function CopyTemplate() {
    return gulp.src(paths.template_src).pipe(gulp.dest(paths.template_dest));
}
function CopyImages() {
    return gulp.src(paths.images_src).pipe(gulp.dest(paths.images_dest));
}
function CopyScss() {
    return gulp.src(paths.scss_src)
        .pipe(gulp_sass().on('error', gulp_sass.logError))
        .pipe(gulp.dest(paths.scss_dest));
}

gulp.task('copy_templates', CopyTemplate);
gulp.task('copy_images', CopyImages);
gulp.task('copy_scss', CopyScss);
gulp.task('watcher', () => {
    gulp.watch(paths.template_src, CopyTemplate);
    gulp.watch(paths.images_src, CopyImages);
    gulp.watch(paths.scss_src, CopyScss);
});
gulp.task('build', () => {
    return run_sequence(['copy_templates', 'copy_images', 'copy_scss']);
});
gulp.task('default', () => {
    return run_sequence(['copy_templates', 'copy_images', 'copy_scss', 'watcher']);
});
