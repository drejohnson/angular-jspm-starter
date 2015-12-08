System.register(['../constants/constants'], function(exports_1) {
    var constants_1;
    function OnConfig($provide, $urlRouterProvider, $locationProvider, $httpProvider, $compileProvider, $rootScopeProvider, $logProvider, $mdThemingProvider, authProvider, jwtInterceptorProvider) {
        authProvider.init({
            domain: constants_1.AUTH0_DOMAIN,
            clientID: constants_1.AUTH0_CLIENT_ID,
            callbackURL: constants_1.AUTH0_CALLBACK_URL,
            loginUrl: '/connect'
        });
        jwtInterceptorProvider.tokenGetter = function (store) { return store.get('token'); };
        $httpProvider.interceptors.push('jwtInterceptor');
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
        return $urlRouterProvider.otherwise('/connect');
    }
    exports_1("default", OnConfig);
    return {
        setters:[
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbIk9uQ29uZmlnIl0sIm1hcHBpbmdzIjoiOztJQUVBLGtCQUNFLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLHNCQUFzQjtRQUd0QkEsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDaEJBLE1BQU1BLEVBQUVBLHdCQUFZQTtZQUNwQkEsUUFBUUEsRUFBRUEsMkJBQWVBO1lBQ3pCQSxXQUFXQSxFQUFFQSw4QkFBa0JBO1lBRS9CQSxRQUFRQSxFQUFFQSxVQUFVQTtTQUNyQkEsQ0FBQ0EsQ0FBQ0E7UUFFSEEsc0JBQXNCQSxDQUFDQSxXQUFXQSxHQUFHQSxVQUFDQSxLQUFLQSxJQUFLQSxPQUFBQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxDQUFDQSxFQUFsQkEsQ0FBa0JBLENBQUNBO1FBRW5FQSxhQUFhQSxDQUFDQSxZQUFZQSxDQUFDQSxJQUFJQSxDQUFDQSxnQkFBZ0JBLENBQUNBLENBQUNBO1FBR2xEQSxrQkFBa0JBLENBQUNBLGFBQWFBLENBQUNBLFlBQVlBLEVBQUVBO1lBQzdDQSxJQUFJQSxFQUFFQSxTQUFTQTtZQUNmQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxNQUFNQSxFQUFFQSxTQUFTQTtZQUNqQkEsTUFBTUEsRUFBRUEsU0FBU0E7WUFDakJBLE1BQU1BLEVBQUVBLFNBQVNBO1lBQ2pCQSxNQUFNQSxFQUFFQSxTQUFTQTtZQUNqQkEsc0JBQXNCQSxFQUFFQSxPQUFPQTtZQUMvQkEsb0JBQW9CQSxFQUFFQSxpQkFBaUJBO1lBQ3ZDQSwyQkFBMkJBLEVBQUVBLG1CQUFtQkE7U0FDakRBLENBQUNBLENBQUNBO1FBQ0hBLGtCQUFrQkEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsV0FBV0EsRUFBRUE7WUFDNUNBLElBQUlBLEVBQUVBLFNBQVNBO1lBQ2ZBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLE1BQU1BLEVBQUVBLFNBQVNBO1lBQ2pCQSxNQUFNQSxFQUFFQSxTQUFTQTtZQUNqQkEsTUFBTUEsRUFBRUEsU0FBU0E7WUFDakJBLE1BQU1BLEVBQUVBLFNBQVNBO1NBQ2xCQSxDQUFDQSxDQUFDQTtRQUVIQSxrQkFBa0JBLENBQUNBLEtBQUtBLENBQUNBLFNBQVNBLENBQUNBO2FBQ2hDQSxjQUFjQSxDQUFDQSxZQUFZQSxFQUFFQSxFQUFFQSxTQUFTQSxFQUFFQSxLQUFLQSxFQUFFQSxDQUFDQTthQUNsREEsYUFBYUEsQ0FBQ0EsV0FBV0EsQ0FBQ0E7YUFDMUJBLGlCQUFpQkEsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsU0FBU0EsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0E7YUFDckRBLElBQUlBLEVBQUVBLENBQUNBO1FBRVZBLGFBQWFBLENBQUNBLGFBQWFBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO1FBQ2xDQSxZQUFZQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUNqQ0EsZ0JBQWdCQSxDQUFDQSxnQkFBZ0JBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1FBQ3pDQSxrQkFBa0JBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ2hDQSxpQkFBaUJBLENBQUNBLFNBQVNBLENBQUNBO1lBQzFCQSxPQUFPQSxFQUFFQSxJQUFJQTtZQUNiQSxXQUFXQSxFQUFFQSxLQUFLQTtTQUNuQkEsQ0FBQ0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbkJBLE1BQU1BLENBQUNBLGtCQUFrQkEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7SUFDbERBLENBQUNBO0lBN0VELDhCQTZFQyxDQUFBIn0=