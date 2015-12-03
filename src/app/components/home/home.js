System.register(['ng-forward', './home.html!text', './home.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, home_html_text_1, home_css_1;
    var Home;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (home_html_text_1_1) {
                home_html_text_1 = home_html_text_1_1;
            },
            function (home_css_1_1) {
                home_css_1 = home_css_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(TestService, $log) {
                    this.TestService = TestService;
                    this.$log = $log;
                    this.title = 'Home';
                    this.resolve();
                }
                Home.prototype.resolve = function () {
                    var _this = this;
                    this.$log.log(this.title + " component");
                    this.TestService.getValue().then(function (val) { return _this.num = val; });
                };
                Home = __decorate([
                    ng_forward_1.Component({
                        selector: 'home',
                        directives: [],
                        providers: [],
                        bindings: [home_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: home_html_text_1.default
                    }),
                    ng_forward_1.Inject('TestService', '$log'), 
                    __metadata('design:paramtypes', [Object, Object])
                ], Home);
                return Home;
            })();
            exports_1("default", Home);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOlsiSG9tZSIsIkhvbWUuY29uc3RydWN0b3IiLCJIb21lLnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQWVFQSxjQUFtQkEsV0FBV0EsRUFBU0EsSUFBSUE7b0JBQXhCQyxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBQUE7b0JBQVNBLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO29CQUN6Q0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0E7b0JBRXBCQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDakJBLENBQUNBO2dCQUtERCxzQkFBT0EsR0FBUEE7b0JBQUFFLGlCQUdDQTtvQkFGQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsZUFBWUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3pDQSxJQUFJQSxDQUFDQSxXQUFXQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQSxJQUFJQSxDQUFDQSxVQUFBQSxHQUFHQSxJQUFJQSxPQUFBQSxLQUFJQSxDQUFDQSxHQUFHQSxHQUFHQSxHQUFHQSxFQUFkQSxDQUFjQSxDQUFDQSxDQUFDQTtnQkFDMURBLENBQUNBO2dCQTNCSEY7b0JBQUNBLHNCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsTUFBTUE7d0JBQ2hCQSxVQUFVQSxFQUFFQSxFQUFFQTt3QkFDZEEsU0FBU0EsRUFBRUEsRUFBRUE7d0JBQ2JBLFFBQVFBLEVBQUVBLENBQUNBLGtCQUFNQSxDQUFDQTt3QkFDbEJBLFlBQVlBLEVBQUVBLElBQUlBO3dCQUVsQkEsTUFBTUEsRUFBRUEsRUFBRUE7d0JBQ1ZBLFFBQVFBLEVBQUVBLHdCQUFRQTtxQkFDbkJBLENBQUNBO29CQUNEQSxtQkFBTUEsQ0FBQ0EsYUFBYUEsRUFBRUEsTUFBTUEsQ0FBQ0E7O3lCQWtCN0JBO2dCQUFEQSxXQUFDQTtZQUFEQSxDQUFDQSxBQTVCRCxJQTRCQztZQTVCRCwwQkE0QkMsQ0FBQSJ9