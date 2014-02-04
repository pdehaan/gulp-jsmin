# gulp-jsmin

minify js using gulp.

## Install

Install with [npm](https://npmjs.org/package/gulp-jsmin)

```
npm install --save-dev gulp-jsmin
```


## Example

```js
var gulp = require('gulp');
var jsmin = require('gulp-jsmin');

gulp.task('default', function () {
	gulp.src('src/**/*.js')
		.pipe(jsmin())
		.pipe(gulp.dest('dist'));
});
```


## API

### jsmin(options)

See the js-min [options]()

## License

MIT [@chilijung](http://github.com/chilijung)
