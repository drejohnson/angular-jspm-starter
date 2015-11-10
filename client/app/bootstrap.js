System.register(['angular', 'angular-animate', 'angular-sanitize', 'angular-material', 'angular-ui-router', 'reflect-metadata', 'ng-forward', './components/app/app'], function(exports_1) {
    var ng_forward_1, app_1;
    var UNIVERSAL_BINDINGS;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            UNIVERSAL_BINDINGS = [
                'ngSanitize',
                'ngAnimate',
                'ngMaterial',
                'ui.router'
            ];
            ng_forward_1.bootstrap(app_1.App, [
                UNIVERSAL_BINDINGS
            ]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map