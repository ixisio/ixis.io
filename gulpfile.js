/**
 * Variable Decalration
 */
var gulp = require('gulp');

var plugins = {
    autoprefixer: require('gulp-autoprefixer'),
    browserify: require('gulp-browserify'),
    browserSync: require('browser-sync'),
    cssmin: require('gulp-cssmin'),
    fileinclude: require('gulp-file-include'),
    rename: require('gulp-rename'),
    sass: require('gulp-sass'),
    svgSprite: require('gulp-svg-sprite'),
    uglify: require('gulp-uglify'),
    critical: require('critical')
};

/**
 * Helpers
 */
function errorLog (error) {
    console.log(error.message);

    this.emit("end");
}

/**
 * Declare Gulp Tasks
 */
gulp.task('browsersync', function(done) {
    plugins.browserSync({
        server: {
            baseDir: "./www/"
        }
    });

    done();
});

gulp.task('sass', function(done) {
    gulp.src('./main.scss')
        .pipe(plugins.sass({errLogToConsole: true}))
        .on('error', errorLog)
        .pipe(gulp.dest('./www/assets/css/'))
        .pipe(plugins.autoprefixer({
            cascade: false
        }))
        .on('error', errorLog)
        .pipe(gulp.dest('./www/assets/css/non-critical/'))
        .pipe(plugins.browserSync.stream());

        done();
});

gulp.task('sass:deploy', function(done) {
    gulp.src('./main.scss')
        .pipe(plugins.sass({errLogToConsole: true}))
        .pipe(gulp.dest('./www/assets/css/'))
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions', 'ios 11'],
            cascade: false
        }))
        .pipe(gulp.dest('./www/assets/css/'))
        .pipe(plugins.cssmin())
        .pipe(gulp.dest('./www/assets/css/non-critical/'));

        done();
});

gulp.task('browserify', function(done) {
    gulp.src('./main.js')
        .pipe(plugins.browserify())
        .on('error', errorLog)
        .pipe(gulp.dest('./www/assets/js/'))
        .pipe(plugins.browserSync.stream());

        done();
});

gulp.task('browserify:deploy', function(done) {
    gulp.src('./main.js')
        .pipe(plugins.browserify())
        .pipe(gulp.dest('./www/assets/js/'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./www/assets/js/'));

        done();
});

gulp.task('templates', function(done) {
    gulp.src(['./_templates/**/*.html'])
        .pipe(plugins.fileinclude({
            prefix: '@@',
            basepath: './'
        }))
        .on('error', errorLog)
        .pipe(gulp.dest('./www/'))
        .pipe(plugins.browserSync.stream());

        done();
});

gulp.task('templates:deploy', function(done) {
    gulp.src(['./_templates/**/*.html'])
        .pipe(plugins.fileinclude({
            prefix: '@@',
            basepath: './'
        }))
        .pipe(gulp.dest('./www/'));

        done();
});

gulp.task('images', function(done) {
    gulp.src('_assets/images/**/*')
        .pipe(gulp.dest('www/assets/images'))
        .on('error', errorLog)
        .pipe(plugins.browserSync.stream());

        done();
});

gulp.task('images:deploy', function(done) {
    gulp.src('_assets/images/**/*')
        .pipe(gulp.dest('www/assets/images'))

        done();
});

gulp.task('icons', function(done) {
    gulp.src('_modules/_icons/svg/*.svg')
        .pipe(plugins.svgSprite({
            mode: {
                symbol: {
                    dest: '../'
                }
            }
        }))
        .on('error', errorLog)
        .pipe(gulp.dest('./www/assets/icons/'))
        .pipe(plugins.browserSync.stream());

        done();
});

gulp.task('icons:deploy', function(done) {
    gulp.src('_modules/_icons/svg/*.svg')
        .pipe(plugins.svgSprite({
            mode: {
                symbol: {
                    dest: '../'
                }
            }
        }))
        .pipe(gulp.dest('./www/assets/icons/'));

        done();
});

gulp.task('copy', function (done) {
    gulp.src('_files/**/*')
        .pipe(gulp.dest('./www/files/'))
        .on('error', errorLog)
        .pipe(plugins.browserSync.stream());

    done();
});

gulp.task('copy:deploy', function(done) {
    gulp.src('_files/**/*')
        .pipe(gulp.dest('./www/files/'));

        done();
});

gulp.task('critical', function(done) {
    plugins.critical.generate({
        inline: true,
        base: 'www/',
        src: 'index.html',
        dest: 'index.html',
        minify: true,
        dimensions: [{
            width: 352,
            height: 900
        }, {
            width: 768,
            height: 1350
        }],
        css: ['www/assets/css/non-critical/main.css'],
        extract: true
    });

    done();
});

gulp.task('watch', function(done) {
    gulp.watch(['./main.js', './**/_*/*.js'], gulp.series('browserify'));
    gulp.watch(['./*.scss', './**/_*/*.scss'], gulp.series('sass'));
    gulp.watch(['./**/_*/*.html', './_templates/**/*.html'], gulp.series('templates'));
    gulp.watch('./_assets/images/**/*', gulp.series('images'));
    gulp.watch('./_files/**/*', gulp.series('copy'));
    gulp.watch('./_modules/_icons/svg/*.svg', gulp.series('icons'));

    done();
});

gulp.task('dev', gulp.series(
    'sass',
    'browserify',
    'browsersync',
    'templates',
    'images',
    'copy',
    'icons',
    'watch'
));

gulp.task('deploy', gulp.series(
    'sass:deploy',
    'browserify:deploy',
    'templates:deploy',
    'images:deploy',
    'copy:deploy',
    'icons:deploy'
));

gulp.task('default', gulp.series('dev'));


