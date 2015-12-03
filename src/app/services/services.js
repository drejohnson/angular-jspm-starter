System.register(['./account', './test'], function(exports_1) {
    var account_1, test_1;
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
            function (account_1_1) {
                account_1 = account_1_1;
                exportStar_1(account_1_1);
            },
            function (test_1_1) {
                test_1 = test_1_1;
                exportStar_1(test_1_1);
            }],
        execute: function() {
            exports_1("APP_SERVICES_BINDINGS", APP_SERVICES_BINDINGS = [
                account_1.ACCOUNT_SERVICE_BINDINGS,
                test_1.TEST_SERVICE_BINDINGS
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQVNXLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFyQixtQ0FBQSxxQkFBcUIsR0FBZTtnQkFDN0Msa0NBQXdCO2dCQUN4Qiw0QkFBcUI7YUFDdEIsQ0FBQSxDQUFDIn0=