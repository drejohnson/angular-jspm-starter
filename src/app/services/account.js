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
    var HTTP, LOG, AccountService, ACCOUNT_SERVICE_BINDINGS;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            }],
        execute: function() {
            HTTP = new WeakMap();
            LOG = new WeakMap();
            AccountService = (function () {
                function AccountService($http, $log) {
                    HTTP.set(this, $http);
                    LOG.set(this, $log);
                    this.apiHost = '/api';
                    this.name = 'Account Service';
                }
                AccountService.prototype.getProfile = function () {
                    return HTTP.get(this).get(this.apiHost + "/me");
                };
                AccountService.prototype.updateProfile = function (profileData) {
                    return HTTP.get(this).put(this.apiHost + "/me", profileData);
                };
                AccountService = __decorate([
                    ng_forward_1.Injectable(),
                    ng_forward_1.Inject('$http', '$log'), 
                    __metadata('design:paramtypes', [Object, Object])
                ], AccountService);
                return AccountService;
            })();
            exports_1("AccountService", AccountService);
            exports_1("ACCOUNT_SERVICE_BINDINGS", ACCOUNT_SERVICE_BINDINGS = [
                AccountService
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOlsiQWNjb3VudFNlcnZpY2UiLCJBY2NvdW50U2VydmljZS5jb25zdHJ1Y3RvciIsIkFjY291bnRTZXJ2aWNlLmdldFByb2ZpbGUiLCJBY2NvdW50U2VydmljZS51cGRhdGVQcm9maWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUlNLElBQUksRUFDSixHQUFHLGtCQXFCSSx3QkFBd0I7Ozs7Ozs7WUF0Qi9CLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBRTFCO2dCQUtFQSx3QkFBWUEsS0FBS0EsRUFBRUEsSUFBSUE7b0JBQ3JCQyxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDdEJBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLElBQUlBLENBQUNBLENBQUNBO29CQUNwQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsTUFBTUEsQ0FBQ0E7b0JBQ3RCQSxJQUFJQSxDQUFDQSxJQUFJQSxHQUFHQSxpQkFBaUJBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBQ0RELG1DQUFVQSxHQUFWQTtvQkFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsUUFBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQ2xEQSxDQUFDQTtnQkFDREYsc0NBQWFBLEdBQWJBLFVBQWNBLFdBQVdBO29CQUN2QkcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBSUEsSUFBSUEsQ0FBQ0EsT0FBT0EsUUFBS0EsRUFBRUEsV0FBV0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9EQSxDQUFDQTtnQkFoQkhIO29CQUFDQSx1QkFBVUEsRUFBRUE7b0JBQ1pBLG1CQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxDQUFDQTs7bUNBZ0J2QkE7Z0JBQURBLHFCQUFDQTtZQUFEQSxDQUFDQSxBQWpCRCxJQWlCQztZQWpCRCwyQ0FpQkMsQ0FBQTtZQUVZLHNDQUFBLHdCQUF3QixHQUFHO2dCQUN0QyxjQUFjO2FBQ2YsQ0FBQSxDQUFDIn0=