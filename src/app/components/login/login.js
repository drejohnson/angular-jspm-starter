System.register(['ng-forward', './login.html!text', './login.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, login_html_text_1, login_css_1;
    var INIT, AUTH, LOCATION, MDTOAST, LOG, Login;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (login_html_text_1_1) {
                login_html_text_1 = login_html_text_1_1;
            },
            function (login_css_1_1) {
                login_css_1 = login_css_1_1;
            }],
        execute: function() {
            INIT = new WeakMap();
            AUTH = new WeakMap();
            LOCATION = new WeakMap();
            MDTOAST = new WeakMap();
            LOG = new WeakMap();
            angular.module('login.config', ['ui.router'])
                .config(function ($stateProvider) {
                $stateProvider
                    .state('login', {
                    url: '/login',
                    template: '<login></login>',
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
            Login = (function () {
                function Login($log, $location, $auth, $mdToast) {
                    this.title = 'Login';
                    LOG.set(this, $log);
                    LOCATION.set(this, $location);
                    AUTH.set(this, $auth);
                    MDTOAST.set(this, $mdToast);
                    LOG.get(this).log(this.title + " component");
                }
                Login.prototype.login = function () {
                    var _this = this;
                    AUTH.get(this).login(this.user).then(function () {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content('You have successfully signed in!')
                            .position('top left')
                            .hideDelay(3000));
                        LOCATION.get(_this).path('/');
                    })
                        .catch(function (error) {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content(error.data.message, error.status)
                            .position('top left')
                            .hideDelay(3000));
                    });
                };
                Login.prototype.authenticate = function (provider) {
                    var _this = this;
                    AUTH.get(this).authenticate(provider).then(function () {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content('You have successfully signed in with ' + provider + '!')
                            .position('top left')
                            .hideDelay(3000));
                        $location.path('/');
                    })
                        .catch(function (error) {
                        if (error.error) {
                            MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                                .content(error.error)
                                .position('top left')
                                .hideDelay(3000));
                        }
                        else if (error.data) {
                            MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                                .content(error.data.message, error.status)
                                .position('top left')
                                .hideDelay(3000));
                        }
                        else {
                            MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                                .content(error)
                                .position('top left')
                                .hideDelay(3000));
                        }
                    });
                };
                ;
                Login = __decorate([
                    ng_forward_1.Component({
                        selector: 'login',
                        directives: [],
                        providers: ['login.config'],
                        bindings: [login_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: login_html_text_1.default
                    }),
                    ng_forward_1.Inject('$log', '$location', '$auth', '$mdToast'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object])
                ], Login);
                return Login;
            })();
            exports_1("default", Login);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6WyJMb2dpbiIsIkxvZ2luLmNvbnN0cnVjdG9yIiwiTG9naW4ubG9naW4iLCJMb2dpbi5hdXRoZW50aWNhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBVU0sSUFBSSxFQUNKLElBQUksRUFDSixRQUFRLEVBQ1IsT0FBTyxFQUNQLEdBQUc7Ozs7Ozs7Ozs7Ozs7WUFKSCxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNyQixRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN6QixPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN4QixHQUFHLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUUxQixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUMxQyxNQUFNLENBQUMsVUFBQyxjQUFjO2dCQUNyQixjQUFjO3FCQUNYLEtBQUssQ0FBQyxPQUFPLEVBQUU7b0JBQ2QsR0FBRyxFQUFFLFFBQVE7b0JBQ2IsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsT0FBTyxFQUFFO3dCQUNQLGNBQWMsRUFBRSxVQUFDLEVBQUUsRUFBRSxLQUFLOzRCQUN4QixJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQzVCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDcEIsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDTixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7NEJBQ3JCLENBQUM7NEJBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQzFCLENBQUM7cUJBQ0Y7aUJBQ0YsQ0FB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RUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBRWhCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUNwQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsRUFBRUE7aUNBQ3pCQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxLQUFLQSxDQUFDQTtpQ0FDcEJBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBO2lDQUNwQkEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3RCQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7NEJBRXRCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUNwQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsRUFBRUE7aUNBQ3pCQSxPQUFPQSxDQUFDQSxLQUFLQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxLQUFLQSxDQUFDQSxNQUFNQSxDQUFDQTtpQ0FDekNBLFFBQVFBLENBQUNBLFVBQVVBLENBQUNBO2lDQUNwQkEsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3RCQSxDQUFDQTt3QkFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7NEJBQ05BLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLEtBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQ3BCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxNQUFNQSxFQUFFQTtpQ0FDekJBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBO2lDQUNkQSxRQUFRQSxDQUFDQSxVQUFVQSxDQUFDQTtpQ0FDcEJBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBO3dCQUN0QkEsQ0FBQ0E7b0JBQ0hBLENBQUNBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTs7Z0JBeEVISDtvQkFBQ0Esc0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxPQUFPQTt3QkFDakJBLFVBQVVBLEVBQUVBLEVBQUVBO3dCQUNkQSxTQUFTQSxFQUFFQSxDQUFDQSxjQUFjQSxDQUFDQTt3QkFDM0JBLFFBQVFBLEVBQUVBLENBQUNBLG1CQUFNQSxDQUFDQTt3QkFDbEJBLFlBQVlBLEVBQUVBLElBQUlBO3dCQUVsQkEsTUFBTUEsRUFBRUEsRUFBRUE7d0JBQ1ZBLFFBQVFBLEVBQUVBLHlCQUFRQTtxQkFDbkJBLENBQUNBO29CQUNEQSxtQkFBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsV0FBV0EsRUFBRUEsT0FBT0EsRUFBRUEsVUFBVUEsQ0FBQ0E7OzBCQStEaERBO2dCQUFEQSxZQUFDQTtZQUFEQSxDQUFDQSxBQXpFRCxJQXlFQztZQXpFRCwyQkF5RUMsQ0FBQTtZQUFBLENBQUMifQ==