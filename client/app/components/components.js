System.register(['./toolbar/toolbar', './sidenav/sidenav', './home/home'], function(exports_1) {
    var toolbar_1, sidenav_1, home_1;
    var APP_COMPONENTS;
    return {
        setters:[
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            APP_COMPONENTS = [
                sidenav_1.default,
                toolbar_1.default,
                home_1.default,
            ];
            exports_1("default",APP_COMPONENTS);
        }
    }
});
//# sourceMappingURL=components.js.map