System.register(['ng-forward', './logout.html!text', './logout.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, logout_html_text_1, logout_css_1;
    var Logout;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (logout_html_text_1_1) {
                logout_html_text_1 = logout_html_text_1_1;
            },
            function (logout_css_1_1) {
                logout_css_1 = logout_css_1_1;
            }],
        execute: function() {
            ;
            Logout = (function () {
                function Logout($log, $location, auth, store) {
                    this.$log = $log;
                    this.$location = $location;
                    this.auth = auth;
                    this.store = store;
                    this.title = 'Logout',
                        this.resolve();
                }
                Logout.prototype.resolve = function () {
                    var _this = this;
                    this.logout = function () {
                        _this.auth.signout();
                        _this.store.remove('profile');
                        _this.store.remove('token');
                        _this.$location.path('/');
                    };
                };
                Logout = __decorate([
                    ng_forward_1.Component({
                        selector: 'logout',
                        directives: [],
                        providers: [],
                        bindings: [logout_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: logout_html_text_1.default
                    }),
                    ng_forward_1.Inject('$log', '$location', 'auth', 'store'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object])
                ], Logout);
                return Logout;
            })();
            exports_1("default", Logout);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nb3V0LnRzIl0sIm5hbWVzIjpbIkxvZ291dCIsIkxvZ291dC5jb25zdHJ1Y3RvciIsIkxvZ291dC5yZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRQyxDQUFDO1lBUUY7Z0JBY0VBLGdCQUFtQkEsSUFBSUEsRUFBU0EsU0FBU0EsRUFBU0EsSUFBSUEsRUFBU0EsS0FBS0E7b0JBQWpEQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtvQkFBU0EsY0FBU0EsR0FBVEEsU0FBU0EsQ0FBQUE7b0JBQVNBLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO29CQUFTQSxVQUFLQSxHQUFMQSxLQUFLQSxDQUFBQTtvQkFDbEVBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFFBQVFBO3dCQUdyQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtnQkFLREQsd0JBQU9BLEdBQVBBO29CQUFBRSxpQkFPQ0E7b0JBTkNBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBO3dCQUNaQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTt3QkFDcEJBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLFNBQVNBLENBQUNBLENBQUNBO3dCQUM3QkEsS0FBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7d0JBQzNCQSxLQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtvQkFDM0JBLENBQUNBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkEvQkhGO29CQUFDQSxzQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsVUFBVUEsRUFBRUEsRUFBRUE7d0JBQ2RBLFNBQVNBLEVBQUVBLEVBQUVBO3dCQUNiQSxRQUFRQSxFQUFFQSxDQUFDQSxvQkFBTUEsQ0FBQ0E7d0JBQ2xCQSxZQUFZQSxFQUFFQSxJQUFJQTt3QkFFbEJBLE1BQU1BLEVBQUVBLEVBQUVBO3dCQUNWQSxRQUFRQSxFQUFFQSwwQkFBUUE7cUJBQ25CQSxDQUFDQTtvQkFDREEsbUJBQU1BLENBQUNBLE1BQU1BLEVBQUVBLFdBQVdBLEVBQUVBLE1BQU1BLEVBQUVBLE9BQU9BLENBQUNBOzsyQkFzQjVDQTtnQkFBREEsYUFBQ0E7WUFBREEsQ0FBQ0EsQUFoQ0QsSUFnQ0M7WUFoQ0QsNEJBZ0NDLENBQUE7WUFBQSxDQUFDIn0=