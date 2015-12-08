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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm5lY3QudHMiXSwibmFtZXMiOlsiQ29ubmVjdCIsIkNvbm5lY3QuY29uc3RydWN0b3IiLCJDb25uZWN0LnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQWNFQSxpQkFBbUJBLEtBQUtBLEVBQVNBLElBQUlBLEVBQVNBLEtBQUtBLEVBQVNBLFNBQVNBLEVBQVNBLElBQUlBO29CQUEvREMsVUFBS0EsR0FBTEEsS0FBS0EsQ0FBQUE7b0JBQVNBLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO29CQUFTQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFBQTtvQkFBU0EsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBQUE7b0JBQVNBLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO29CQUNoRkEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBRXZCQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDakJBLENBQUNBO2dCQUtERCx5QkFBT0EsR0FBUEE7b0JBQUFFLGlCQWFDQTtvQkFaQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsR0FBR0E7d0JBQ2JBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEVBQUVBLEVBQUVBLFVBQUNBLE9BQU9BLEVBQUVBLFFBQVFBLEVBQUVBLFlBQVlBLEVBQUVBLEtBQUtBLEVBQUVBLGFBQWFBOzRCQUV6RUEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsU0FBU0EsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7NEJBQ25DQSxLQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxHQUFHQSxDQUFDQSxPQUFPQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTs0QkFDbENBLEtBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBO3dCQUNsQ0EsQ0FBQ0EsRUFBRUEsVUFBQ0EsS0FBS0E7NEJBRVBBLEtBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLCtCQUErQkEsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7d0JBQ3hEQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDTEEsQ0FBQ0EsQ0FBQ0E7b0JBQ0ZBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUlBLElBQUlBLENBQUNBLEtBQUtBLGVBQVlBLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0E7Z0JBcENIRjtvQkFBQ0Esc0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxTQUFTQTt3QkFDbkJBLFVBQVVBLEVBQUVBLEVBQUVBO3dCQUNkQSxTQUFTQSxFQUFFQSxFQUFFQTt3QkFDYkEsUUFBUUEsRUFBRUEsQ0FBQ0EscUJBQU1BLENBQUNBO3dCQUNsQkEsWUFBWUEsRUFBRUEsSUFBSUE7d0JBRWxCQSxNQUFNQSxFQUFFQSxFQUFFQTt3QkFDVkEsUUFBUUEsRUFBRUEsMkJBQVFBO3FCQUNuQkEsQ0FBQ0E7b0JBQ0RBLG1CQUFNQSxDQUFDQSxPQUFPQSxFQUFFQSxNQUFNQSxFQUFFQSxPQUFPQSxFQUFFQSxXQUFXQSxFQUFFQSxNQUFNQSxDQUFDQTs7NEJBMkJyREE7Z0JBQURBLGNBQUNBO1lBQURBLENBQUNBLEFBckNELElBcUNDO1lBckNELDZCQXFDQyxDQUFBO1lBQUEsQ0FBQyJ9