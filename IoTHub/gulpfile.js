/// <binding ProjectOpened='Watch' />
var gulp = require('gulp');
var react = require("gulp-react");

gulp.task("CopyBower", function () {
    gulp.src([
        "bower_components/bootstrap/dist/css/bootstrap.css",
        "bower_components/react/react.js"
        ]).pipe(gulp.dest("Lib"));
});

gulp.task("CompileReact", function () {
    gulp.src("React/**/*.jsx")
        .pipe(react())
        .pipe(gulp.dest("Scripts"));
});

gulp.task("Watch", function () {
    gulp.watch("React/**/*.jsx", ["CompileReact"]);
});

gulp.task('default', function () {
    // place code for your default task here
});