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
                function TestService($q, $timeout) {
                    this.$q = $q;
                    this.$timeout = $timeout;
                    this.name = 'Test Service';
                }
                TestService.prototype.getValue = function () {
                    var _this = this;
                    return this.$q(function (resolve) {
                        _this.$timeout(function () { return resolve('Async ' + _this.name); }, 3000);
                    });
                };
                TestService = __decorate([
                    ng_forward_1.Injectable(),
                    ng_forward_1.Inject('$q', '$timeout'), 
                    __metadata('design:paramtypes', [Object, Object])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOlsiVGVzdFNlcnZpY2UiLCJUZXN0U2VydmljZS5jb25zdHJ1Y3RvciIsIlRlc3RTZXJ2aWNlLmdldFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztxQkFrQmEscUJBQXFCOzs7Ozs7O1lBZGxDO2dCQUlFQSxxQkFBb0JBLEVBQUVBLEVBQVVBLFFBQVFBO29CQUFwQkMsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBQUE7b0JBQVVBLGFBQVFBLEdBQVJBLFFBQVFBLENBQUFBO29CQUN0Q0EsSUFBSUEsQ0FBQ0EsSUFBSUEsR0FBR0EsY0FBY0EsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFDREQsOEJBQVFBLEdBQVJBO29CQUFBRSxpQkFJQ0E7b0JBSENBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLFVBQUFBLE9BQU9BO3dCQUNwQkEsS0FBSUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsY0FBTUEsT0FBQUEsT0FBT0EsQ0FBQ0EsUUFBUUEsR0FBR0EsS0FBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBN0JBLENBQTZCQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDM0RBLENBQUNBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFYSEY7b0JBQUNBLHVCQUFVQSxFQUFFQTtvQkFDWkEsbUJBQU1BLENBQUNBLElBQUlBLEVBQUVBLFVBQVVBLENBQUNBOztnQ0FXeEJBO2dCQUFEQSxrQkFBQ0E7WUFBREEsQ0FBQ0EsQUFaRCxJQVlDO1lBWkQscUNBWUMsQ0FBQTtZQUVZLG1DQUFBLHFCQUFxQixHQUFHO2dCQUNuQyxXQUFXO2FBQ1osQ0FBQSxDQUFDIn0=