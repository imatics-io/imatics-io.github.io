var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var less = require('gulp-less');
var path = require('path');

// watch files for changes and reload
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        port: 8888,
        browser: []
    });

    gulp.watch(['*.html', 'less/*.less', 'js/*.js'], {cwd: './'}, reload);
});

gulp.task('less', function () {
    return gulp.src('./less/creative.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./css'));
});
