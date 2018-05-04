// --- Dependencies

var
	// General
	gulp = require('gulp'),
	ghPages = require('gulp-gh-pages')
;

// Cnfig
path = {
	dist: {
		deploy: './dist/**/*',
	}
}

// Publish to github pages
gulp.task('default', function() {
	return gulp.src(path.dist.deploy)
		.pipe(ghPages());
});