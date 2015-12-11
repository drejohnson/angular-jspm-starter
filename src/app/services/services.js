System.register(['./page-title', './page-meta', './test'], function(exports_1) {
    var page_title_1, page_meta_1, test_1;
    var APP_SERVICES_BINDINGS;
    var exportedNames_1 = {
        'APP_SERVICES_BINDINGS': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (page_title_1_1) {
                page_title_1 = page_title_1_1;
                exportStar_1(page_title_1_1);
            },
            function (page_meta_1_1) {
                page_meta_1 = page_meta_1_1;
                exportStar_1(page_meta_1_1);
            },
            function (test_1_1) {
                test_1 = test_1_1;
                exportStar_1(test_1_1);
            }],
        execute: function() {
            exports_1("APP_SERVICES_BINDINGS", APP_SERVICES_BINDINGS = [
                page_title_1.PAGE_TITLE_SERVICE_BINDINGS,
                page_meta_1.PAGE_META_SERVICE_BINDINGS,
                test_1.TEST_SERVICE_BINDINGS
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQVVXLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFBckIsbUNBQUEscUJBQXFCLEdBQWM7Z0JBQzVDLHdDQUEyQjtnQkFDM0Isc0NBQTBCO2dCQUMxQiw0QkFBcUI7YUFDdEIsQ0FBQSxDQUFDIn0=