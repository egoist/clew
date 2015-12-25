var gulp = require('gulp')
var postcss = require('gulp-postcss')

var defaultPlugins = [
	require('postcss-nested')(),
	require('postcss-simple-vars')()
]

gulp.task('css:all', function () {
	var plugins = defaultPlugins.concat([
		require('autoprefixer')({
			browsers: ['ie > 7', 'Firefox > 20']
		}),
		require('cssnano')()
	])
	gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./dist/prefixed'))
})

gulp.task('css', function () {
	var plugins = defaultPlugins.concat([
		require('cssnano')()
	])
	gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('./dist'))
})

gulp.task('watch', function () {
	gulp.watch('./src/**/*.css', ['build'])

})

gulp.task('build', ['css:all', 'css'])

gulp.task('default', ['build', 'watch'])
