import * as gulp from 'gulp';
import * as run_sequence from 'run-sequence';

enum paths {
    template_src = './src/proj/templates/**/*',
    images_src = './src/proj/images/**/*',
    scss_src = './src/proj/scss/**/*',
    template_dest = './app/proj/templates/',
    images_dest = './app/proj/images/',
    scss_dest = './app/proj/scss/',
}

gulp.task('copy_templates', () => {
    return gulp.src(paths.template_src).pipe(gulp.dest(paths.template_dest));
});

gulp.task('copy_images', () => {
    return gulp.src(paths.images_src).pipe(gulp.dest(paths.images_dest));
});

gulp.task('copy_scss', () => {
    return gulp.src(paths.scss_src).pipe(gulp.dest(paths.scss_dest));
});

gulp.task('watcher', () => {
    gulp.watch(paths.template_src, () => {
        return gulp.src(paths.template_src).pipe(gulp.dest(paths.template_dest));
    });
    gulp.watch(paths.images_src, () => {
        return gulp.src(paths.images_src).pipe(gulp.dest(paths.images_dest));
    });
    gulp.watch(paths.scss_src, () => {
        return gulp.src(paths.scss_src).pipe(gulp.dest(paths.scss_dest));
    });
});

gulp.task('build', () => {
    return run_sequence(['copy_templates', 'copy_images', 'copy_scss']);
});

gulp.task('default', () => {
    return run_sequence(['copy_templates', 'copy_images', 'copy_scss', 'watcher']);
});
