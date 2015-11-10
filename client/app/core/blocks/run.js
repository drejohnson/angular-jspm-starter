System.register([], function(exports_1) {
    function OnRun($rootScope, $state, $stateParams, $location, $log) {
        $rootScope.$state = $state;
        var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            $rootScope.pageTitle = '';
            $rootScope.pageDesc = '';
        });
        var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            $log.log('Change Started:', new Date());
        });
        var stateChangeError = $rootScope.$on('$stateChangeError', function (event, next, previous, error) {
            event.preventDefault();
            $log.error(error.stack);
            $state.go('500');
            $log.log(error);
        });
    }
    exports_1("default", OnRun);
    return {
        setters:[],
        execute: function() {
        }
    }
});
//# sourceMappingURL=run.js.map