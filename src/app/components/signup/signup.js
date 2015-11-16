System.register(['ng-forward', './signup.html!text', './signup.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, signup_html_text_1, signup_css_1;
    var AUTH, LOCATION, MDTOAST, LOG, Signup;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (signup_html_text_1_1) {
                signup_html_text_1 = signup_html_text_1_1;
            },
            function (signup_css_1_1) {
                signup_css_1 = signup_css_1_1;
            }],
        execute: function() {
            AUTH = new WeakMap();
            LOCATION = new WeakMap();
            MDTOAST = new WeakMap();
            LOG = new WeakMap();
            angular.module('signup.config', ['ui.router'])
                .config(function ($stateProvider) {
                $stateProvider
                    .state('signup', {
                    url: '/signup',
                    template: '<signup></signup>',
                    resolve: {
                        skipIfLoggedIn: function ($q, $auth) {
                            var deferred = $q.defer();
                            if ($auth.isAuthenticated()) {
                                deferred.reject();
                            }
                            else {
                                deferred.resolve();
                            }
                            return deferred.promise;
                        }
                    }
                });
            });
            Signup = (function () {
                function Signup($log, $location, $auth, $mdToast) {
                    this.title = 'Signup';
                    LOCATION.set(this, $location);
                    AUTH.set(this, $auth);
                    MDTOAST.set(this, $mdToast);
                    LOG.set(this, $log);
                    LOG.get(this).log(this.title + " component");
                }
                Signup.prototype.signup = function () {
                    var _this = this;
                    AUTH.get(this).signup(this.user).then(function (response) {
                        AUTH.get(_this).setToken(response);
                        LOCATION.get(_this).path('/');
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content('You have successfully created a new account and have been signed-in')
                            .position('top left')
                            .hideDelay(3000));
                    })
                        .catch(function (response) {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content(response.data.message)
                            .position('top left')
                            .hideDelay(3000));
                    });
                };
                Signup = __decorate([
                    ng_forward_1.Component({
                        selector: 'signup',
                        directives: [],
                        providers: ['signup.config'],
                        bindings: [signup_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: signup_html_text_1.default
                    }),
                    ng_forward_1.Inject('$log', '$location', '$auth', '$mdToast'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object])
                ], Signup);
                return Signup;
            })();
            exports_1("default", Signup);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbnVwLnRzIl0sIm5hbWVzIjpbIlNpZ251cCIsIlNpZ251cC5jb25zdHJ1Y3RvciIsIlNpZ251cC5zaWdudXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBVU0sSUFBSSxFQUNKLFFBQVEsRUFDUixPQUFPLEVBQ1AsR0FBRzs7Ozs7Ozs7Ozs7OztZQUhILElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBRTFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzNDLE1BQU0sQ0FBQyxVQUFDLGNBQWM7Z0JBQ3JCLGNBQWM7cUJBQ1gsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDZixHQUFHLEVBQUUsU0FBUztvQkFDZCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixPQUFPLEVBQUU7d0JBQ1AsY0FBYyxFQUFFLFVBQUMsRUFBRSxFQUFFLEtBQUs7NEJBQ3hCLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDNUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDNUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUNwQixDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNOLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDckIsQ0FBQzs0QkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFDMUIsQ0FBQztxQkFDRjtpQkFDRixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUdMO2dCQWNFQSxnQkFBWUEsSUFBSUEsRUFBRUEsU0FB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