// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('app/**/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
	gulp.src('app/css/*.css')
		.pipe(cssmin())		
		.pipe(gulp.dest('dist/css'));
});

gulp.task('html', function() {
  return gulp.src('app/templates/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/templates'));
});

gulp.task('index', function() {
  return gulp.src('app/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {    
    gulp.watch('app/**/*.js', ['lint', 'scripts', 'index', 'html', 'css']);    
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'index', 'html', 'css', 'watch']);