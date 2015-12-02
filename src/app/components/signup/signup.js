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
                    this.user = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        email: this.email,
                        password: this.password
                    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbnVwLnRzIl0sIm5hbWVzIjpbIlNpZ251cCIsIlNpZ251cC5jb25zdHJ1Y3RvciIsIlNpZ251cC5zaWdudXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBVU0sSUFBSSxFQUNKLFFBQVEsRUFDUixPQUFPLEVBQ1AsR0FBRzs7Ozs7Ozs7Ozs7OztZQUhILElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBRTFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzNDLE1BQU0sQ0FBQyxVQUFDLGNBQWM7Z0JBQ3JCLGNBQWM7cUJBQ1gsS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDZixHQUFHLEVBQUUsU0FBUztvQkFDZCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixPQUFPLEVBQUU7d0JBQ1AsY0FBYyxFQUFFLFVBQUMsRUFBRSxFQUFFLEtBQUs7NEJBQ3hCLElBQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs0QkFDNUIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQztnQ0FDNUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUNwQixDQUFDOzRCQUFDLElBQUksQ0FBQyxDQUFDO2dDQUNOLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDckIsQ0FBQzs0QkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFDMUIsQ0FBQztxQkFDRjtpQkFDRixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUdMO2dCQWtCRUEsZ0JBQVlBLElBQUlBLEVBQUVBLFNB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