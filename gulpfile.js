const { 
    src, 
    dest
} = require('gulp');
var sass = require('gulp-sass')(require('sass'));

const compileSass = require('gulp-sass');

compileSass.compiler = require('node-sass');

const bundleSass = () => {
    return src('./scss/*.scss')
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(dest('./dist'));
}

exports.bundleSass = bundleSass;