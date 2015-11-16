System.register(['ng-forward', './profile.html!text', './profile.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, profile_html_text_1, profile_css_1;
    var SERVICE, AUTH, LOCATION, MDTOAST, LOG, Profile;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (profile_html_text_1_1) {
                profile_html_text_1 = profile_html_text_1_1;
            },
            function (profile_css_1_1) {
                profile_css_1 = profile_css_1_1;
            }],
        execute: function() {
            SERVICE = new WeakMap();
            AUTH = new WeakMap();
            LOCATION = new WeakMap();
            MDTOAST = new WeakMap();
            LOG = new WeakMap();
            angular.module('profile.config', ['ui.router'])
                .config(function ($stateProvider) {
                $stateProvider
                    .state('profile', {
                    url: '/profile',
                    template: '<profile></profile>',
                    resolve: {
                        loginRequired: function ($q, $location, $auth) {
                            var deferred = $q.defer();
                            if ($auth.isAuthenticated()) {
                                deferred.resolve();
                            }
                            else {
                                $location.path('/login');
                            }
                            return deferred.promise;
                        }
                    }
                });
            });
            Profile = (function () {
                function Profile($log, $auth, $mdToast, AccountService) {
                    this.title = 'Profile';
                    LOCATION.set(this, $location);
                    AUTH.set(this, $auth);
                    MDTOAST.set(this, $mdToast);
                    SERVICE.set(this, AccountService);
                    LOG.set(this, $log);
                    LOG.get(this).log(this.title + " component");
                    this.getProfile();
                }
                Profile.prototype.getProfile = function () {
                    var _this = this;
                    AccountService.getProfile().then(function (response) {
                        _this.user = response.data;
                    })
                        .catch(function (response) {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content(response.data.message, response.status)
                            .position('top left')
                            .hideDelay(3000));
                    });
                };
                Profile.prototype.updateProfile = function () {
                    var _this = this;
                    AccountService.updateProfile(this.user).then(function (response) {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content('Profile has been updated')
                            .position('top left')
                            .hideDelay(3000));
                    })
                        .catch(function (response) {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content(response.data.message, response.status)
                            .position('top left')
                            .hideDelay(3000));
                    });
                };
                Profile.prototype.link = function (provider) {
                    var _this = this;
                    AUTH.get(this).link(provider).then(function () {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content('You have successfully linked a ' + provider + ' account')
                            .position('top left')
                            .hideDelay(3000));
                    })
                        .catch(function (response) {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content(response.data.message, response.status)
                            .position('top left')
                            .hideDelay(3000));
                    });
                };
                Profile.prototype.unlink = function (provider) {
                    var _this = this;
                    AUTH.get(this).unlink(provider).then(function () {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content('You have unlinked a ' + provider + ' account')
                            .position('top left')
                            .hideDelay(3000));
                        _this.getProfile();
                    })
                        .catch(function (response) {
                        MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                            .content(response.data ? response.data.message : 'Could not unlink ' + provider + ' account', response.status)
                            .position('top left')
                            .hideDelay(3000));
                    });
                };
                Profile = __decorate([
                    ng_forward_1.Component({
                        selector: 'profile',
                        directives: [],
                        providers: ['profile.config'],
                        bindings: [profile_css_1.default],
                        controllerAs: 'vm',
                        template: profile_html_text_1.default
                    }),
                    ng_forward_1.Inject('$log', '$auth', '$mdToast', 'AccountService'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object])
                ], Profile);
                return Profile;
            })();
            exports_1("default", Profile);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOlsiUHJvZmlsZSIsIlByb2ZpbGUuY29uc3RydWN0b3IiLCJQcm9maWxlLmdldFByb2ZpbGUiLCJQcm9maWxlLnVwZGF0ZVByb2ZpbGUiLCJQcm9maWxlLmxpbmsiLCJQcm9maWxlLnVubGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFVTSxPQUFPLEVBQ1AsSUFBSSxFQUNKLFFBQVEsRUFDUixPQUFPLEVBQ1AsR0FBRzs7Ozs7Ozs7Ozs7OztZQUpILE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3pCLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBRTFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDNUMsTUFBTSxDQUFDLFVBQUMsY0FBYztnQkFDckIsY0FBYztxQkFDWCxLQUFLLENBQUMsU0FBUyxFQUFFO29CQUNoQixHQUFHLEVBQUUsVUFBVTtvQkFDZixRQUFRLEVBQUUscUJBQXFCO29CQUMvQixPQUFPLEVBQUU7d0JBQ1AsYUFBYSxFQUFFLFVBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLOzRCQUNsQyxJQUFNLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0NBQzVCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs0QkFDckIsQ0FBQzs0QkFBQyxJQUFJLENBQUMsQ0FBQztnQ0FDTixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRC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