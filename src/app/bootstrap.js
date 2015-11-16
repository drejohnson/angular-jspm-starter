System.register(['angular', 'angular-animate', 'angular-sanitize', 'angular-material', 'angular-ui-router', 'satellizer', 'reflect-metadata', 'ng-forward', './services/services', './components/app/app'], function(exports_1) {
    var ng_forward_1, services_1, app_1;
    var UNIVERSAL_BINDINGS;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            UNIVERSAL_BINDINGS = [
                'ngSanitize',
                'ngAnimate',
                'ngMaterial',
                'ui.router',
                'satellizer',
                services_1.APP_SERVICES_BINDINGS
            ];
            ng_forward_1.bootstrap(app_1.App, [
                UNIVERSAL_BINDINGS
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vdHN0cmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O1FBMEJNLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBbEIsa0JBQWtCLEdBQUc7Z0JBRXpCLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsWUFBWTtnQkFHWixnQ0FBcUI7YUFDdEIsQ0FBQztZQU9GLHNCQUFTLENBQUMsU0FBRyxFQUFFO2dCQUNiLGtCQUFrQjthQUNuQixDQUFDLENBQUMifQ==