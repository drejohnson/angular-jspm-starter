System.register([], function(exports_1) {
    function OnConfig($provide, $urlRouterProvider, $locationProvider, $httpProvider, $compileProvider, $rootScopeProvider, $logProvider, $mdThemingProvider, $authProvider) {
        $httpProvider.interceptors.push(function ($rootScope, $q, $window, $location) {
            return {
                request: function (config) {
                    if ($window.localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
                    }
                    return config;
                },
                responseError: function (response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
        });
        $authProvider.facebook({
            clientId: '657854390977827'
        });
        $authProvider.google({
            clientId: '458926145328-jv8dfmrea4uek6lgimjntgdcl6fqi2ts.apps.googleusercontent.com'
        });
        $authProvider.twitter({
            url: '/auth/twitter'
        });
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
        return $urlRouterProvider.otherwise('/');
    }
    exports_1("default", OnConfig);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbIk9uQ29uZmlnIiwiT25Db25maWcucmVxdWVzdCIsIk9uQ29uZmlnLnJlc3BvbnNlRXJyb3IiXSwibWFwcGluZ3MiOiI7SUFBQSxrQkFDRSxRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixhQUFhLEVBQ2IsZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGFBQWE7UUFFYkEsYUFBYUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBQ0EsVUFBVUEsRUFBRUEsRUFBRUEsRUFBRUEsT0FBT0EsRUFBRUEsU0FBU0E7WUFDakVBLE1BQU1BLENBQUNBO2dCQUNMQSxPQUFPQSxZQUFDQSxNQUFNQTtvQkFDWkMsRUFBRUEsQ0FBQ0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQy9CQSxNQUFNQSxDQUFDQSxPQUFPQSxDQUFDQSxhQUFhQSxHQUFHQSxTQUFTQSxHQUFHQSxPQUFPQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDeEVBLENBQUNBO29CQUNEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtnQkFDaEJBLENBQUNBO2dCQUNERCxhQUFhQSxZQUFDQSxRQUFRQTtvQkFDcEJFLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLEtBQUtBLEdBQUdBLElBQUlBLFFBQVFBLENBQUNBLE1BQU1BLEtBQUtBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBO3dCQUN2REEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQzNCQSxDQUFDQTtvQkFDREEsTUFBTUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTthQUNGRixD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