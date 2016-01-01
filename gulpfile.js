const gulp = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tsConfig = require('./tsconfig.json');
const babel = require('gulp-babel');

gulp.task('default', ['build']);

gulp.task('build', () => 
  gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsConfig.compilerOptions))
    .pipe(babel())
    .pipe(sourcemaps.write('.', {
      includeContent: false, 
      sourceRoot: file => {
        var filename = '../';
        file.relative.split(/\\|\//).forEach(() => filename = filename + '../');
        return filename + 'src';
      }
    }))
    .pipe(gulp.dest('out/src'))
);