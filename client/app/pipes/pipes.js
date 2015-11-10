System.register(['./upcase'], function(exports_1) {
    var upcase_1;
    var APP_PIPES;
    return {
        setters:[
            function (upcase_1_1) {
                upcase_1 = upcase_1_1;
            }],
        execute: function() {
            APP_PIPES = [
                upcase_1.ToUpperCase
            ];
            exports_1("default",APP_PIPES);
        }
    }
});
//# sourceMappingURL=pipes.js.map