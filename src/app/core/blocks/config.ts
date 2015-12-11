import { AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_CALLBACK_URL } from '../constants/constants';

export default function OnConfig(
  $provide,
  $urlRouterProvider,
  $locationProvider,
  $httpProvider,
  $compileProvider,
  $rootScopeProvider,
  $logProvider,
  $mdThemingProvider,
  authProvider,
  jwtInterceptorProvider) {
  // Config block

  // $httpProvider.interceptors.push(($rootScope, $q, $window, $injector, $location) => {
  //   return {
  //     request(config) {
  //       const TokenModel = $injector.get($window.localStorage.token);
  //       const token = TokenModel.get();
  //       if ($window.localStorage.token) {
  //         config.headers = config.headers || {};
  //         config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
  //       }
  //       return config;
  //     },
  //     responseError(rejection) {
  //       switch (rejection.status) {
  //         case 401:
  //           // injected manually to get around circular dependency problem
  //           const TokenModel = $injector.get($window.localStorage.token);
  //           TokenModel.remove();
  //           $location.path('/');
  //           break;
  //         case 403:
  //           $location.path('/403');
  //           break;
  //       }
  //
  //       return $q.reject(rejection);
  //     }
  //   };
  // });

  authProvider.init({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    callbackURL: AUTH0_CALLBACK_URL,
    // Here include the URL to redirect to if the user tries to access a resource when not authenticated.
    loginUrl: '/connect'
  });

  jwtInterceptorProvider.tokenGetter = (store) => store.get('token');

  $httpProvider.interceptors.push('jwtInterceptor');

  // Angular Material theme config
  $mdThemingProvider.definePalette('brand-grey', {
    '50': '#e9e9e9',
    '100': '#bcbcbc',
    '200': '#909090',
    '300': '#6b6b6b',
    '400': '#464646',
    '500': '#212121',
    '600': '#1d1d1d',
    '700': '#191919',
    '800': '#151515',
    '900': '#111111',
    'A100': '#bcbcbc',
    'A200': '#909090',
    'A400': '#464646',
    'A700': '#191919',
    'hue-1': '600',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': '50 100 200 A100',
    'contrastStrongLightColors': '300 400 A200 A400'
  });
  $mdThemingProvider.definePalette('brand-red', {
    '50': '#f9ebea',
    '100': '#ecc4bf',
    '200': '#e09c95',
    '300': '#d57b72',
    '400': '#ca5a4e',
    '500': '#c0392b',
    '600': '#a83226',
    '700': '#902b20',
    '800': '#78241b',
    '900': '#601d16',
    'A100': '#ecc4bf',
    'A200': '#e09c95',
    'A400': '#ca5a4e',
    'A700': '#902b20'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('brand-grey', { 'default': '600' })
    .accentPalette('brand-red')
    .backgroundPalette('brand-grey', { 'default': '900' })
    .dark();

  $httpProvider.useApplyAsync(true);
  $logProvider.debugEnabled(false);
  $compileProvider.debugInfoEnabled(false);
  $rootScopeProvider.digestTtl(8);
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');
  return $urlRouterProvider.otherwise('/connect');
}
