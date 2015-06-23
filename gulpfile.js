var gulp        = require("gulp");
var gutil       = require("gulp-util");
var source      = require("vinyl-source-stream");
var babelify    = require("babelify");
var watchify    = require("watchify");
var browserify  = require("browserify");

// Input file.
var browser = browserify("./src/DatePicker.js", watchify.args);
browser.exclude( "react" );
var bundler = watchify( browser );


// Babel transform
bundler.transform(babelify);

// On updates recompile
bundler.on("update", bundle);

function bundle() {

    gutil.log("Compiling JS...");

    return bundler.bundle()
        .on("error", function (err) {
            gutil.log(err.message);
            this.emit("end");
        })
        .pipe(source("DatePicker.js"))
        .pipe(gulp.dest("./dist")).on( "end", function() {
    			gutil.log( "Bundling Finished", gutil.colors.cyan( "DatePicker.js" ) );
        } );
}

/**
 * Gulp task alias
 */
gulp.task("bundle", function () {
    return bundle();
});


gulp.task( "default", ["bundle"] );
