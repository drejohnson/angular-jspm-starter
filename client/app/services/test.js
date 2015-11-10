System.register(['ng-forward'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1;
    var TestService, TEST_SERVICE_BINDINGS;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            }],
        execute: function() {
            TestService = (function () {
                function TestService($log) {
                    this.name = 'Test Service';
                }
                TestService.prototype.getService = function () {
                    return this.name;
                };
                TestService = __decorate([
                    ng_forward_1.Injectable(),
                    ng_forward_1.Inject('$log'), 
                    __metadata('design:paramtypes', [Object])
                ], TestService);
                return TestService;
            })();
            exports_1("TestService", TestService);
            exports_1("TEST_SERVICE_BINDINGS", TEST_SERVICE_BINDINGS = [
                TestService
            ]);
        }
    }
});
//# sourceMappingURL=test.js.map