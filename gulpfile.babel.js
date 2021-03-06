import path from 'path';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import systemjsBuilder from 'systemjs-builder';
import serve from 'browser-sync';
import modRewrite from 'connect-modrewrite';
import del from 'del';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import colorFunction from 'postcss-color-function'
import lost from 'lost';
import calc from 'postcss-calc';
import yargs from 'yargs';

const $ = gulpLoadPlugins();
const reload = () => serve.reload();
const root = 'src';

// helper method to resolveToApp paths
const resolveTo = (resolvePath) => {
  return (glob) => {
    glob = glob || '';
    return path.resolve(path.join(root, resolvePath, glob));
  };
};

const resolveToApp = resolveTo('app'); // app/{glob}
const resolveToComponents = resolveTo('app/components'); // app/components/{glob}

// map of all paths
const paths = {
  app: [resolveToApp('**/*.ts')],
  css: [resolveToApp('**/_*.css')], // stylesheets
  cssCompiled: [resolveToApp('**/*.css')],
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  static: path.join(root, 'static/**/*'),
  blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
  dist: path.join(__dirname, 'static/')
};

// gulp.task('styles', () => styleTask('./', ['**/_*.css']));

gulp.task('serve', gulp.series(
  styles,
  gulp.parallel(serveDev, watch)
));

gulp.task('serve:dist', gulp.series(
  clean,
  gulp.parallel(styles, build, staticFiles),
  serveDist
));

gulp.task('dist', gulp.series(
  clean,
  gulp.parallel(styles, staticFiles),
  build
));

gulp.task(clean);
gulp.task(styles);
gulp.task(staticFiles);
gulp.task(build);
gulp.task(watch);
gulp.task(component);


// The default task (called when you run `gulp` from cli)
gulp.task('default', gulp.series('dist'));

// Clean
function clean() {
  return del([paths.dist]);
}

function styles() {
  const processors = [
    precss(),
    colorFunction(),
    lost(),
    calc(),
    autoprefixer({browsers: ['last 2 version']})
  ];
  return gulp.src(paths.css)
    .pipe($.newer(resolveToApp('**')))
    .pipe($.sourcemaps.init())
    .pipe($.postcss(processors).on('error', console.error.bind(console)))
    .pipe($.rename((filepath) => {
      filepath.basename = path.basename(filepath.dirname);
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(path.join(root, 'app')));
}

function staticFiles() {
  return gulp.src(paths.static)
    .pipe(gulp.dest(paths.dist));
}

function build() {
  const Builder = systemjsBuilder;
  const builder = new Builder(root, './jspm.config.js');
  const dist = path.join(paths.dist + 'build.js');

  return builder.buildStatic(resolveToApp('bootstrap.ts'), dist, {
    minify: true,
    mangle: false,
  })
  .then(() => {
    // Also create a fully annotated minified copy
    return gulp.src(dist)
      .pipe(gulp.dest(paths.dist));
  })
  .then(() => {
    // Inject minified script into index
    return gulp.src('src/index.html')
      .pipe($.htmlReplace({
        'js': 'build.js'
      }))
      .pipe(gulp.dest(paths.dist));
  });
}

// Browser-sync
function serveDev() {
  // require('chokidar-socket-emitter')({port: 8081, path: 'src', relativeTo: 'src'});
  serve({
    port: process.env.PORT || 3000,
    open: false,
    files: [].concat(
      paths.app,
      paths.css,
      paths.html
    ),
    server: {
      baseDir: [root, root + '/static'],
      // serve our jspm dependencies with the src folder
      routes: {
        '/jspm.config.js': './jspm.config.js',
        '/jspm_packages': './jspm_packages'
      }
    },
    middleware: [
      modRewrite([
        '^([^.]+)$ /index.html [L]'
      ])
    ]
  });
}

// Browser-sync Dist
function serveDist() {
  serve({
    port: process.env.PORT || 3000,
    open: false,
    notify: false,
    logPrefix: 'FEDS',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    // will present a certificate warning in the browser.
    // https: true,
    server: 'static',
    baseDir: 'static',
    middleware: [
      modRewrite([
        '^([^.]+)$ /index.html [L]'
      ])
    ]
  });
}

// Rerun the task when a file changes
function watch() {
  // gulp.watch(paths.html).on('change', reload);
  // gulp.watch(paths.css).on('change', gulp.series(styles, reload));
  // gulp.watch(paths.app).on('change', reload);
  gulp.watch(paths.html, reload);
  gulp.watch(paths.app, reload);
  gulp.watch(paths.css, gulp.series(styles, reload));
}

function component() {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const camel = (val) => {
    return val.replace( /-([a-z])/ig, ( all, letter ) => letter.toUpperCase());
  };
  const name = yargs.argv.name;
  const upCaseName = cap(name);
  const camelCaseName = camel(upCaseName);
  const parentPath = yargs.argv.parent || '';
  const destPath = path.join(resolveToComponents(), parentPath, name);

  return gulp.src(paths.blankTemplates)
  .pipe($.template({
    name,
    upCaseName,
    camelCaseName
  }))
  .pipe($.rename((path) => {
    path.basename = path.basename.replace('temp', name);
  }))
  .pipe(gulp.dest(destPath));
}
