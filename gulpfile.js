const path = require('path');
const fs = require('fs');
var gulp = require('gulp');
//var webpack = require('webpack');
//const nodeExternals = require('webpack-node-externals');
var gls = require('gulp-live-server');
var browserSync = require('browser-sync').create();

//var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var server = null;

//start server
gulp.task('serve', function() {
    //var server = gls.new('main.js');
    if (server == null){
        server = gls.new('./server.js');
    }
    server.start();

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['./build/html5/kha.js'], function (file) {
        console.log("files change???");
        if (server != null){
            server.notify.apply(server, [file]);
            server.start.bind(server)();
        }
        browserSync.reload();
    });

    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['./build/html5/*'], function (file) {
        console.log("files change?");
        if (server != null){
            server.notify.apply(server, [file]);
            server.start.bind(server)();
        }
        browserSync.reload();
    });
    // Note: try wrapping in a function if getting an error like `TypeError: Bad argument at TypeError (native) at ChildProcess.spawn`
    gulp.watch('./server.js', function() {
        server.start.bind(server)();
    });
});

//lanuch browser sync for proxy url
gulp.task('browser-sync',['serve'], function() {
    browserSync.init({
        proxy: "localhost:8080"
        ,files:['build/html5/*']
        //,browser: 'chrome'
        //,browser: 'firefox'
    });
});

gulp.task('default', ['serve','browser-sync']);

gulp.task('one', function(done) {
    // do stuff
    done();
});

gulp.task('two', function(done) {
    // do stuff
    done();
});

//gulp.task('default', gulp.series('one', 'two', function(done) {
    //console.log('test');
    //done();
//}));
