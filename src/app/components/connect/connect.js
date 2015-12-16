System.register(['ng-forward', './connect.html!text', './connect.css!', 'animate.css/animate.css!'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, connect_html_text_1, connect_css_1, animate_css_1;
    var Connect;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (connect_html_text_1_1) {
                connect_html_text_1 = connect_html_text_1_1;
            },
            function (connect_css_1_1) {
                connect_css_1 = connect_css_1_1;
            },
            function (animate_css_1_1) {
                animate_css_1 = animate_css_1_1;
            }],
        execute: function() {
            Connect = (function () {
                function Connect($http, auth, store, $location, $log) {
                    this.$http = $http;
                    this.auth = auth;
                    this.store = store;
                    this.$location = $location;
                    this.$log = $log;
                    this.title = 'Connect';
                    this.resolve();
                }
                Connect.setTags = function (PageTitleService, PageMetaTagsService) {
                    return {
                        title: PageTitleService.setTitle('Connect'),
                        description: PageMetaTagsService.setMetaDescription('This is connect page description'),
                        image: PageMetaTagsService.setMetaImage('/images/logos/logo-red.svg')
                    };
                };
                Connect.prototype.resolve = function () {
                    var _this = this;
                    this.connect = function () {
                        _this.auth.signin({}, function (profile, id_token, access_token, state, refresh_token) {
                            _this.store.set('profile', profile);
                            _this.store.set('token', id_token);
                            _this.$location.path('/profile');
                        }, function (error) {
                            _this.$log.log('There was an error logging in', error);
                        });
                    };
                    this.$log.log(this.title + " component");
                };
                __decorate([
                    ng_forward_1.Resolve(),
                    ng_forward_1.Inject('PageTitleService', 'PageMetaTagsService'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], Connect, "setTags", null);
                Connect = __decorate([
                    ng_forward_1.Component({
                        selector: 'connect',
                        directives: [],
                        providers: [],
                        bindings: [animate_css_1.default, connect_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: connect_html_text_1.default
                    }),
                    ng_forward_1.Inject('$http', 'auth', 'store', '$location', '$log'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object, Object])
                ], Connect);
                return Connect;
            })();
            exports_1("default", Connect);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm5lY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXVCQTtnQkFhRSxpQkFBbUIsS0FBSyxFQUFTLElBQUksRUFBUyxLQUFLLEVBQVMsU0FBUyxFQUFTLElBQUk7b0JBQS9ELFVBQUssR0FBTCxLQUFLLENBQUE7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBQTtvQkFBUyxVQUFLLEdBQUwsS0FBSyxDQUFBO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQUE7b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBQTtvQkFDaEYsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7b0JBRXZCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsQ0FBQztnQkFYTSxlQUFPLEdBQWQsVUFBZSxnQkFBZ0IsRUFBRSxtQkFBbUI7b0JBQ2xELE1BQU0sQ0FBQzt3QkFDTCxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQzt3QkFDM0MsV0FBVyxFQUFFLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGtDQUFrQyxDQUFDO3dCQUN2RixLQUFLLEVBQUUsbUJBQW1CLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDO3FCQUN0RSxDQUFDO2dCQUNKLENBQUM7Z0JBVUQseUJBQU8sR0FBUDtvQkFBQSxpQkFhQztvQkFaQyxJQUFJLENBQUMsT0FBTyxHQUFHO3dCQUNiLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxhQUFhOzRCQUV6RSxLQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7NEJBQ25DLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQzs0QkFDbEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ2xDLENBQUMsRUFBRSxVQUFDLEtBQUs7NEJBRVAsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBQ3hELENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQztvQkFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsS0FBSyxlQUFZLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkEvQkQ7b0JBQUMsb0JBQU8sRUFBRTtvQkFDVCxtQkFBTSxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDOzs7OzRDQUFBO2dCQWhCcEQ7b0JBQUMsc0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsU0FBUyxFQUFFLEVBQUU7d0JBQ2IsUUFBUSxFQUFFLENBQUMscUJBQVcsRUFBRSxxQkFBTSxDQUFDO3dCQUMvQixZQUFZLEVBQUUsSUFBSTt3QkFFbEIsTUFBTSxFQUFFLEVBQUU7d0JBQ1YsUUFBUSxFQUFFLDJCQUFRO3FCQUNuQixDQUFDO29CQUNELG1CQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQzs7MkJBQUE7Z0JBcUN0RCxjQUFDO1lBQUQsQ0FBQyxBQXBDRCxJQW9DQztZQXBDRCw2QkFvQ0MsQ0FBQTtZQUFBLENBQUMifQ==