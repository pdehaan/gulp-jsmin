var gulp = require('gulp');
var jsmin = require('./');

gulp.task('default', function () {
    gulp.src('./sample/test.js')
        .pipe(jsmin())
        .pipe(gulp.dest('./sample/dist'));
});
