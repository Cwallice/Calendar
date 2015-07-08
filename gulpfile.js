var gulp        = require("gulp");
var gutil       = require("gulp-util");
var source      = require("vinyl-source-stream");
var babelify    = require("babelify");
var watchify    = require("watchify");
var browserify  = require("browserify");
var path        = require( "path" );
var sass        = require( "gulp-sass" );
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
        .pipe( gulp.dest( dir ) );
}

function bundle( opts ){
  var bundler = watchify( browserify( { entries: [ opts.source ], debug: true } ) );
  bundler.transform(babelify.configure( {
      optional: [ "runtime" ]
  } ) );
  bundler.on("update", function() { compile( bundler, opts ); } );
  compile( bundler, opts );
  return bundler;
}
/**
 * Gulp task alias
 */
gulp.task( "watch-js", function () {
    bundle( { source: "./src/Calendar.js", dest:"./dist/Calendar.js" } );
    return bundle( { source: "./example/js/app.js", dest:"./example/js/bundle.js" } );
});

gulp.task( "build-scss", function() {
  console.log("in");

  return gulp.src( "./example/css/*.scss" )
    .pipe( sass( { errLogToConsole: true } ) )
    .pipe( gulp.dest( "./example/css/" ) );
} );

gulp.task( "watch-scss", [ "build-scss" ], function() {
  gulp.watch( "./example/css/*.scss", [ "build-scss" ] );
} );

gulp.task( "default", [ "watch-js", "watch-scss" ] );
