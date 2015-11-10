System.register(['./test'], function(exports_1) {
    var test_1;
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
            function (test_1_1) {
                test_1 = test_1_1;
                exportStar_1(test_1_1);
            }],
        execute: function() {
            exports_1("APP_SERVICES_BINDINGS", APP_SERVICES_BINDINGS = [
                test_1.TEST_SERVICE_BINDINGS
            ]);
        }
    }
});
//# sourceMappingURL=services.js.map