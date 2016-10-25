const gulp = require('gulp');
const resume = require('gulp-resume');
const rename = require('gulp-rename');

function copyAssets () {
  return gulp.src('./assets/**')
     .pipe(gulp.dest('./dist/assets/'));
};

function makeResume() {
  return gulp.src('resume.json')
    .pipe(resume({
      format: 'html',
      theme: 'elegant'
    }))
    .pipe(rename('resume1.html'))
    .pipe(gulp.dest('./dist'));
};

gulp.task('makeResume', makeResume);
gulp.task('copyAssets', copyAssets);
gulp.task('resume', ['makeResume', 'copyAssets']);
