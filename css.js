import { CSSLoader, Plugins } from 'jspm-loader-css'
import precss from 'precss';
import lost from 'lost';
import calc from 'postcss-calc';

export default new CSSLoader([
  precss(),
  lost(),
  calc(),
  Plugins.autoprefixer({browsers: ['last 2 version']})
], __moduleName)
