"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", ["server", "app", "assets"], function () {
    console.log("Building resources...");
});
/* copy the app core files to the build folder */
gulp.task("app", ['index'], function(){
    return gulp.src(["app/**", "!app/**/*.ts"])
        .pipe(gulp.dest("build/app"));
});
/* get the index file to the root of the build */
gulp.task("index",['system'], function(){
    return gulp.src(["*.html"])
        .pipe(gulp.dest("build"));
});
/* get the index file to the root of the build */
gulp.task("system", function(){
    return gulp.src(["systemjs.config.js"])
        .pipe(gulp.dest("build"));
});
/* copy node server to build folder */
gulp.task("server", function () {
    return gulp.src(["index.js", "package.json"], { cwd: "src/server/**" })
        .pipe(gulp.dest("build"));
});
/* styles and other assets */
gulp.task("assets", function(){
    return gulp.src(["assets/**"])
        .pipe(gulp.dest("build/assets"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
      'core-js/client/shim.min.js',
      'zone.js/dist/zone.js',
      'reflect-metadata/Reflect.js',
      'systemjs/dist/system.src.js',
      'jquery/dist/jquery.js'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});
/**
gulp.task("cores", function () {
    return gulp.src([
      '@angular/core/bundles/core.umd.js',
      '@angular/common/bundles/common.umd.js',
      '@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http/bundles/http.umd.js',
      '@angular/router/bundles/router.umd.js',
      '@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade/bundles/upgrade.umd.js',
      // other libraries
      'rxjs/add/operator/toPromise.js',
      'rxjs/add/operator/switchMap.js',
      'angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    ], { cwd: "node_modules/**" })
        .pipe(gulp.dest("build/node_modules"));
});
*/
/**
 * Build the project.
 */
gulp.task("default", ['resources', 'libs'], function () {
    console.log("Building the project ...");
});
