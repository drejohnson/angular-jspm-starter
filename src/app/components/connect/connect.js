System.register(['ng-forward', './connect.html!text', './connect.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, connect_html_text_1, connect_css_1;
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
                        bindings: [connect_css_1.default],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm5lY3QudHMiXSwibmFtZXMiOlsiQ29ubmVjdCIsIkNvbm5lY3QuY29uc3RydWN0b3IiLCJDb25uZWN0LnNldFRhZ3MiLCJDb25uZWN0LnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQXdCRUEsaUJBQW1CQSxLQUFLQSxFQUFTQSxJQUFJQSxFQUFTQSxLQUFLQSxFQUFTQSxTQUFTQSxFQUFTQSxJQUFJQTtvQkFBL0RDLFVBQUtBLEdBQUxBLEtBQUtBLENBQUFBO29CQUFTQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtvQkFBU0EsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBQUE7b0JBQVNBLGNBQVNBLEdBQVRBLFNBQVNBLENBQUFBO29CQUFTQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtvQkFDaEZBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBO29CQUV2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtnQkFYTUQsZUFBT0EsR0FGZEEsVUFFZUEsZ0JBQWdCQSxFQUFFQSxtQkFBbUJBO29CQUNsREUsTUFBTUEsQ0FBQ0E7d0JBQ0xBLEtBQUtBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQzNDQSxXQUFXQSxFQUFFQSxtQkFBbUJBLENBQUNBLGtCQUFrQkEsQ0FBQ0Esa0NBQWtDQSxDQUFDQTt3QkFDdkZBLEtBQUtBLEVBQUVBLG1CQUFtQkEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQTtxQkFDdEVBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkFVREYseUJBQU9BLEdBQVBBO29CQUFBRyxpQkFhQ0E7b0JBWkNBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBO3dCQUNiQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxFQUFFQSxFQUFFQSxVQUFDQSxPQUFPQSxFQUFFQSxRQUFRQSxFQUFFQSxZQUFZQSxFQUFFQSxLQUFLQSxFQUFFQSxhQUFhQTs0QkFFekVBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLEdBQUdBLENBQUNBLFNBQVNBLEVBQUVBLE9BQU9BLENBQUNBLENBQUNBOzRCQUNuQ0EsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsT0FBT0EsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7NEJBQ2xDQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQTt3QkFDbENBLENBQUNBLEVBQUVBLFVBQUNBLEtBQUtBOzRCQUVQQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSwrQkFBK0JBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO3dCQUN4REEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ0xBLENBQUNBLENBQUNBO29CQUNGQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxlQUFZQSxDQUFDQSxDQUFDQTtnQkFDM0NBLENBQUNBO2dCQS9CREg7b0JBQUNBLG9CQUFPQSxFQUFFQTtvQkFDVEEsbUJBQU1BLENBQUNBLGtCQUFrQkEsRUFBRUEscUJBQXFCQSxDQUFDQTs7OzttQkFDM0NBLGtCQUFPQSxRQU1iQTtnQkF2QkhBO29CQUFDQSxzQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFNBQVNBO3dCQUNuQkEsVUFBVUEsRUFBRUEsRUFBRUE7d0JBQ2RBLFNBQVNBLEVBQUVBLEVBQUVBO3dCQUNiQSxRQUFRQSxFQUFFQSxDQUFDQSxxQkFBTUEsQ0FBQ0E7d0JBQ2xCQSxZQUFZQSxFQUFFQSxJQUFJQTt3QkFFbEJBLE1BQU1BLEVBQUVBLEVBQUVBO3dCQUNWQSxRQUFRQSxFQUFFQSwyQkFBUUE7cUJBQ25CQSxDQUFDQTtvQkFDREEsbUJBQU1BLENBQUNBLE9BQU9BLEVBQUVBLE1BQU1BLEVBQUVBLE9BQU9BLEVBQUVBLFdBQVdBLEVBQUVBLE1BQU1BLENBQUNBOzs0QkFxQ3JEQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0FBQ0EsQUEvQ0QsSUErQ0M7WUEvQ0QsNkJBK0NDLENBQUE7WUFBQSxDQUFDIn0=