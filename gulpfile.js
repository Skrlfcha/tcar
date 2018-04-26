var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('app/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('browserSync', function () {
    var files = [
        '*.html',
        'app/css/**/*.css',
        'app/img/**/*.png',
        'app/js/**/*.js'
    ];

    browserSync.init(files, {
        localOnly: false,
        host: "atoyot.skf",
        proxy: "atoyot.skf"
    });
});
gulp.task('default', ['browserSync', 'sass'], function (){
    gulp.watch('app/sass/**/*.scss', ['sass']);
});