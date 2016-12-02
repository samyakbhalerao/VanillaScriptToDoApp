var gulp=require('gulp');
var sass=require('gulp-sass');
var autoprefixer=require('gulp-autoprefixer');
var browserSync=require('browser-sync');
//default gulp task
gulp.task("default",['style'],function(){
	 gulp.watch('sass/*.scss',['style']);
	 gulp.watch('index.html').on('change',browserSync.reload);
	 gulp.watch('css/*.css').on('change',browserSync.reload);
	 gulp.watch('js/**/*.js').on('change',browserSync.reload);
	 gulp.watch('js/*.js').on('change',browserSync.reload);

});
gulp.task("style",function(){
	gulp.src('sass/*.scss').
	pipe(sass().on('error',sass.logError)).
	pipe(gulp.dest("./css"));
});
browserSync.init({
	server:"./"
});
browserSync.stream();