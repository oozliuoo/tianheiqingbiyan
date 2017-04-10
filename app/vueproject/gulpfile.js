/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    shell = require('gulp-shell');
var runSequence = require('run-sequence');
var fs = require('fs');

// create a default task and just log a message
gulp.task('default', ['watch']);

// create task for building both vue proj and cordova platforms
gulp.task('build', function(){
    runSequence('buildvue',
                'inject_cordovaJS',
                ['buildbrowser', 'buildios']
    );
});

// inject cordova.js to ../www/index.html
gulp.task('inject_cordovaJS', function() {
    var data = fs.readFileSync('../www/index.html').toString();
    data = data.replace("</body></html>", "<script type=text/javascript src=cordova.js></script></body></html>");
    fs.writeFile('../www/index.html', data,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("Updated index.html with cordova.js");
    });
});

// build different platforms
gulp.task('buildbrowser', shell.task(['cordova build browser']));
gulp.task('buildios', shell.task(['cordova build ios']));

// build vueue project
gulp.task('buildvue', shell.task([
    'npm run build'
]));

// setup watch task
gulp.task('watch', function(){
    gulp.watch("src/**/*.js", ['build']);
    gulp.watch("src/**/*.Vue", ['build']);
});
