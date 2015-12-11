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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbIk9uQ29uZmlnIl0sIm1hcHBpbmdzIjoiOztJQUVBLGtCQUNFLFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLHNCQUFzQjtRQWdDdEJBLFlBQVlBLENBQUNBLElBQUlBLENBQUNBO1lBQ2hCQSxNQUFNQSxFQUFFQSx3QkFBWUE7WUFDcEJBLFFBQVFBLEVBQUVBLDJCQUFlQTtZQUN6QkEsV0FBV0EsRUFBRUEsOEJBQWtCQTtZQUUvQkEsUUFBUUEsRUFBRUEsVUFBVUE7U0FDckJBLENBQUNBLENBQUNBO1FBRUhBLHNCQUFzQkEsQ0FBQ0EsV0FBV0EsR0FBR0EsVUFBQ0EsS0FBS0EsSUFBS0EsT0FBQUEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsRUFBbEJBLENBQWtCQSxDQUFDQTtRQUVuRUEsYUFBYUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxDQUFDQTtRQUdsREEsa0JBQWtCQSxDQUFDQSxhQUFhQSxDQUFDQSxZQUFZQSxFQUFFQTtZQUM3Q0EsSUFBSUEsRUFBRUEsU0FBU0E7WUFDZkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsTUFBTUEsRUFBRUEsU0FBU0E7WUFDakJBLE1BQU1BLEVBQUVBLFNBQVNBO1lBQ2pCQSxNQUFNQSxFQUFFQSxTQUFTQTtZQUNqQkEsTUFBTUEsRUFBRUEsU0FBU0E7WUFDakJBLE9BQU9BLEVBQUVBLEtBQUtBO1lBQ2RBLHNCQUFzQkEsRUFBRUEsT0FBT0E7WUFDL0JBLG9CQUFvQkEsRUFBRUEsaUJBQWlCQTtZQUN2Q0EsMkJBQTJCQSxFQUFFQSxtQkFBbUJBO1NBQ2pEQSxDQUFDQSxDQUFDQTtRQUNIQSxrQkFBa0JBLENBQUNBLGFBQWFBLENBQUNBLFdBQVdBLEVBQUVBO1lBQzVDQSxJQUFJQSxFQUFFQSxTQUFTQTtZQUNmQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxLQUFLQSxFQUFFQSxTQUFTQTtZQUNoQkEsS0FBS0EsRUFBRUEsU0FBU0E7WUFDaEJBLEtBQUtBLEVBQUVBLFNBQVNBO1lBQ2hCQSxNQUFNQSxFQUFFQSxTQUFTQTtZQUNqQkEsTUFBTUEsRUFBRUEsU0FBU0E7WUFDakJBLE1BQU1BLEVBQUVBLFNBQVNBO1lBQ2pCQSxNQUFNQSxFQUFFQSxTQUFTQTtTQUNsQkEsQ0FBQ0EsQ0FBQ0E7UUFFSEEsa0JBQWtCQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxDQUFDQTthQUNoQ0EsY0FBY0EsQ0FBQ0EsWUFBWUEsRUFBRUEsRUFBRUEsU0FBU0EsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0E7YUFDbERBLGFBQWFBLENBQUNBLFdBQVdBLENBQUNBO2FBQzFCQSxpQkFBaUJBLENBQUNBLFlBQVlBLEVBQUVBLEVBQUVBLFNBQVNBLEVBQUVBLEtBQUtBLEVBQUVBLENBQUNBO2FBQ3JEQSxJQUFJQSxFQUFFQSxDQUFDQTtRQUVWQSxhQUFhQSxDQUFDQSxhQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUNsQ0EsWUFBWUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDakNBLGdCQUFnQkEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtRQUN6Q0Esa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNoQ0EsaUJBQWlCQSxDQUFDQSxTQUFTQSxDQUFDQTtZQUMxQkEsT0FBT0EsRUFBRUEsSUFBSUE7WUFDYkEsV0FBV0EsRUFBRUEsS0FBS0E7U0FDbkJBLENBQUNBLENBQUNBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ25CQSxNQUFNQSxDQUFDQSxrQkFBa0JBLENBQUNBLFNBQVNBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO0lBQ2xEQSxDQUFDQTtJQTNHRCw4QkEyR0MsQ0FBQSJ9