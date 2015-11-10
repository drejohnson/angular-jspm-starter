System.register(['./config', './run'], function(exports_1) {
    var config_1, run_1;
    return {
        setters:[
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (run_1_1) {
                run_1 = run_1_1;
            }],
        execute: function() {
            exports_1("OnConfig", config_1.default);
            exports_1("OnRun", run_1.default);
        }
    }
});
//# sourceMappingURL=blocks.js.map