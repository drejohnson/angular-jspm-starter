System.register(['../constants/constants'], function(exports_1) {
    var constants_1;
    function OnRun($rootScope, $state, $stateParams, $location, $document, $log, auth, store, jwtHelper, PageTitleService, PageMetaTagsService) {
        auth.hookEvents();
        $rootScope.$state = $state;
        var locationChangeStart = $rootScope.$on('$locationChangeStart', function () {
            var token = store.get('token');
            if (token) {
                if (!jwtHelper.isTokenExpired(token)) {
                    if (!auth.isAuthenticated) {
                        auth.authenticate(store.get('profile'), token);
                    }
                }
                else {
                    $location.path('/connect');
                }
            }
        });
        var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $log.log('Change Started:', new Date());
        });
        var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            $rootScope.pageTitle = constants_1.AppSettings.appTitle;
            $rootScope.pageDescription = constants_1.AppSettings.appDescription;
            var title = PageTitleService.getTitle();
            document['title'] = title || $rootScope.pageTitle;
            var metaDescription = PageMetaTagsService.getMetaDescription();
            var description = document.querySelector('meta[name="description"]');
            description['content'] = metaDescription || $rootScope.pageDescription;
            var ogTitle = document.querySelector('meta[property="og:title"]');
            ogTitle['title'] = title || $rootScope.pageTitle;
            var ogDescription = document.querySelector('meta[property="og:description"]');
            ogDescription['content'] = metaDescription || $rootScope.pageDescription;
            var metaImage = PageMetaTagsService.getMetaImage();
            var ogImage = document.querySelector('meta[property="og:image"]');
            ogImage['content'] = metaImage || '/images/logos/logo-red.svg';
            var ogUrl = document.querySelector('meta[property="og:url"]');
            ogUrl['content'] = 'http://tomorrowpictures.tv';
            if (('data' in toState) && ('requiresLogin' in toState.data) && (!auth.isAuthenticated)) {
                event.preventDefault();
                $state.go('connect');
                $log.warn('REQUIRES LOGIN');
            }
        });
        var stateChangeError = $rootScope.$on('$stateChangeError', function (event, next, previous, error) {
            event.preventDefault();
            $log.error(error.stack);
            $log.log(error);
        });
    }
    exports_1("default", OnRun);
    return {
        setters:[
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicnVuLnRzIl0sIm5hbWVzIjpbIk9uUnVuIl0sIm1hcHBpbmdzIjoiOztJQUVBLGVBQ0UsVUFBVSxFQUNWLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxFQUNULFNBQVMsRUFDVCxJQUFJLEVBQ0osSUFBSSxFQUNKLEtBQUssRUFDTCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLG1CQUFtQjtRQUluQkEsSUFBSUEsQ0FBQ0EsVUFBVUEsRUFBRUEsQ0FBQ0E7UUFFbEJBLFVBQVVBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBO1FBRTNCQSxJQUFNQSxtQkFBbUJBLEdBQUdBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLHNCQUFzQkEsRUFBRUE7WUFDakVBLElBQU1BLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO1lBQ2pDQSxFQUFFQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDVkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsY0FBY0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3JDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDMUJBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO29CQUNqREEsQ0FBQ0E7Z0JBQ0hBLENBQUNBO2dCQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFFTkEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtZQUNIQSxDQUFDQTtRQUNIQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxJQUFNQSxnQkFBZ0JBLEdBQUdB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