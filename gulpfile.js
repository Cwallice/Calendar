var gulp        = require("gulp");
var gutil       = require("gulp-util");
var source      = require("vinyl-source-stream");
var babelify    = require("babelify");
var watchify    = require("watchify");
var browserify  = require("browserify");
var path        = require( "path" );
//bundle datepicker



function compile( bundler, opts ) {
    var name = path.basename( opts.dest );
    var dir = path.dirname( opts.dest );
    gutil.log("Compiling");
    return bundler.bundle()
        .on("error", function (err) {
            gutil.log(err.message);
            this.emit("end");
        })
        .pipe( source( name ) )
        .pipe(gulp.dest( dir )).on( "end", function() {
          gutil.log( "Bundling Finished", gutil.colors.cyan( name ) );
        } );
}

function bundle( opts ){
  var bundler = watchify( browserify( { entries: [ opts.source ], debug: true } ) );
  bundler.transform(babelify);
  bundler.on("update", function() { compile( bundler, opts ); } );
  compile( bundler, opts );
  return bundler;
}
/**
 * Gulp task alias
 */
gulp.task( "bundle", function () {
    bundle( { source: "./src/DatePicker.js", dest:"./dist/DatePicker.js" } );
    return bundle( { source: "./example/js/app.js", dest:"./example/js/bundle.js" } );
});


gulp.task( "default", ["bundle"] );
