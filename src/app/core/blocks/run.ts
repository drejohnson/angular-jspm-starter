import { AppSettings } from '../constants/constants';

export default function OnRun(
  $rootScope,
  $state,
  $stateParams,
  $location,
  $document,
  $log,
  auth,
  store,
  jwtHelper,
  PageTitleService,
  PageMetaTagsService) {
  // Run block

  // This hooks allow auth events to check everything as soon as the app starts
  auth.hookEvents();

  $rootScope.$state = $state;

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

  const stateChangeStart = $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    $log.log('Change Started:', new Date());
  });

  const stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', (event, toState) => {

    $rootScope.pageTitle = AppSettings.appTitle;
    $rootScope.pageDescription = AppSettings.appDescription;

    // Title
    const title = PageTitleService.getTitle();
    document['title'] = title || $rootScope.pageTitle;
    // Description
    const metaDescription = PageMetaTagsService.getMetaDescription();
    const description = document.querySelector('meta[name="description"]');
    description['content'] = metaDescription || $rootScope.pageDescription;
    // Image

    // Opengraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle['title'] = title || $rootScope.pageTitle;

    const ogDescription = document.querySelector('meta[property="og:description"]');
    ogDescription['content'] = metaDescription || $rootScope.pageDescription;

    const metaImage = PageMetaTagsService.getMetaImage();
    const ogImage = document.querySelector('meta[property="og:image"]');
    ogImage['content'] = metaImage || '/images/logos/logo-red.svg';

    const ogUrl = document.querySelector('meta[property="og:url"]');
    ogUrl['content'] = 'http://tomorrowpictures.tv';

    // Auth0 conditional to redirect if not authorized.
    if (('data' in toState) && ('requiresLogin' in toState.data) && (!auth.isAuthenticated)) {
      event.preventDefault();
      $state.go('connect');
      $log.warn('REQUIRES LOGIN');
    }
  });

  const stateChangeError = $rootScope.$on('$stateChangeError', (event, next, previous, error) => {
    event.preventDefault();
    $log.error(error.stack);
    // $state.go('500');
    $log.log(error);
  });
}
