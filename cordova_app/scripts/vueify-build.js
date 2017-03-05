var fs = require('fs');
var browserify = require('browserify');
var vueify = require('vueify');

browserify('www/js/main.js')
  .transform(vueify)
  .plugin('vueify-extract-css', { out: 'www/css/bundle.css' })
  .bundle()
  .pipe(fs.createWriteStream('www/js/bundle.js'))