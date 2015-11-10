import path from 'path';
import Builder from 'systemjs-builder';

let builder = new Builder();

builder.loadConfig('jspm.config.js')
.then(() => {
  builder.config({
  });
  return builder.buildSFX(
    './client/app/bootstrap.ts',
    './static/bundle.js',
    { minify: true, sourceMaps: 'inline'}
  );
});
