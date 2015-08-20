/**
 * Variable Decalration
 */
var gulp = require('gulp');
var plugins = {
        autoprefixer: require('gulp-autoprefixer'),
        browserify: require('gulp-browserify'),
        browserSync: require('browser-sync'),
        cssmin: require('gulp-cssmin'),
        rename: require('gulp-rename'),
        sass: require('gulp-sass')
    };

/**
 * Declare Gulp Tasks
 */
gulp.task('browsersync', function() {
    plugins.browserSync({
        proxy: 'ixisio.dev'
    });
});

gulp.task('sass', function () {
    gulp.src('./main.scss')
        .pipe(plugins.sass({errLogToConsole: true}))
        .pipe(gulp.dest('./www/assets/css/'))
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions', 'ios 6'],
            cascade: false
        }))
        .pipe(gulp.dest('./www/assets/css/'))
        .pipe(plugins.browserSync.stream());
});

gulp.task('browserify', function() {
    gulp.src('./main.js')
        .pipe(plugins.browserify())
        .pipe(gulp.dest('./www/assets/js/'))
        .pipe(plugins.browserSync.stream());
});

gulp.task('convert-normalize.css-to-scss', function() {
  return gulp.src(['node_modules/normalize.css/normalize.css'])
            .pipe(plugins.rename('_normalize.scss'))
            .pipe(gulp.dest('node_modules/normalize.css/'));
});

gulp.task('watch', function () {
    gulp.watch(['./www/**/*.php', './www/**/*.txt'])
        .on('change', plugins.browserSync.reload);

    gulp.watch(['./main.js', './**/_*/*.js'], ['browserify']);
    gulp.watch(['./main.scss', './**/_*/*.scss'], ['sass']);
});

gulp.task('cssmin', function () {
    gulp.src('./www/*.css')
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('./www/'));
});

gulp.task('dev', [
    'convert-normalize.css-to-scss',
    'sass',
    'browserify',
    'browsersync',
    'watch'
]);

gulp.task('build', [
    'convert-normalize.css-to-scss',
    'sass',
    'cssmin',
    'browserify'
]);
