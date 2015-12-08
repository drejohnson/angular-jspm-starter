export default function OnRun(
  $rootScope,
  $state,
  $stateParams,
  $location,
  $log,
  auth,
  store,
  jwtHelper) {
  // Run block

  // This hooks allow auth events to check everything as soon as the app starts
  auth.hookEvents();

  $rootScope.$state = $state;
  // $state.get('profile').data.requiresLogin = true;
  const stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';
    $rootScope.pageDesc = '';

    // $rootScope.pageTitle = AppSettings.appTitle;
    // $rootScope.pageDescription = AppSettings.appDescription;
    //
    // const title = getTitleValue($state.$current.locals.globals.$title);
    // const description = getDescriptionValue($state.$current.locals.globals.$description);
    // const metaImg = getMetaImgValue($state.$current.locals.globals.$metaImg);
    // const url = getUrlValue($state.$current.locals.globals.$url);
    //
    // $rootScope.$title = title || $rootScope.pageTitle;
    // $rootScope.$description = description || $rootScope.pageDescription;
    // $rootScope.$metaImg = metaImg;
    // $rootScope.$url = url;
    //
    // $log.log('Current Location: ' + $rootScope.$title);

    $log.log($state.current);
    // $log.log(fromState);
    // if ($state.current.data !== undefined && !auth.isAuthenticated) {
    //   $location.path('/connect');
    //   $log.warn('REQUIRES LOGIN');
    // }
  });

  const stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    $log.log('Change Started:', new Date());
  });

  const stateChangeError = $rootScope.$on('$stateChangeError', (event, next, previous, error) => {
    event.preventDefault();
    $log.error(error.stack);
    $state.go('500');
    $log.log(error);
  });

  const locationChangeStart = $rootScope.$on('$locationChangeStart', () => {
    const token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/connect');
      }
    }
  });
}
