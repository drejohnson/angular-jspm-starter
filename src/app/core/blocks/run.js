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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicnVuLnRzIl0sIm5hbWVzIjpbIk9uUnVuIl0sIm1hcHBpbmdzIjoiO0lBQUEsZUFDRSxVQUFVLEVBQ1YsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1QsSUFBSTtRQUVKQSxVQUFVQSxDQUFDQSxNQUFNQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUUzQkEsSUFBTUEsa0JBQWtCQSxHQUFHQSxVQUFVQSxDQUFDQSxHQUFHQSxDQUFDQSxxQkFBcUJBLEVBQUVBLFVBQUNBLEtBQUtBLEVBQUVBLE9BQU9BO1lBQzlFQSxVQUFVQSxDQUFDQSxTQUFTQSxHQUFHQSxFQUFFQSxDQUFDQTtZQUMxQkEsVUFBVUEsQ0FBQ0EsUUFBUUEsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFpQjNCQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUVIQSxJQUFNQSxnQkFBZ0JBLEdBQUdBLFVBQVVBLENBQUNBLEdBQUdBLENBQUNBLG1CQUFtQkEsRUFBRUEsVUFBQ0EsS0FBS0EsRUFBRUEsT0FBT0EsRUFBRUEsUUFBUUEsRUFBRUEsU0FBU0EsRUFBRUEsVUFBVUE7WUFDM0dBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLGlCQUFpQkEsRUFBRUEsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFFMUNBLENBQUNBLENBQUNBLENBQUNBO1FBRUhBLElBQU1BLGdCQUFnQkEsR0FBR0EsVUFBVUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsbUJBQW1CQSxFQUFFQSxVQUFDQSxLQUFLQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUN4RkEsS0FBS0EsQ0FBQ0EsY0FBY0EsRUFBRUEsQ0FBQ0E7WUFDdkJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO1lBQ3hCQSxNQUFNQSxDQUFDQSxFQUFFQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtZQUNqQkEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDbEJBLENBQUNBLENBQUNBLENBQUNBO0lBQ0xBLENBQUNBO0lBekNELDJCQXlDQyxDQUFBIn0=