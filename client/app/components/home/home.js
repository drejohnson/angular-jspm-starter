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
    var INIT, SERVICE, LOG, Home;
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
            INIT = new WeakMap();
            SERVICE = new WeakMap();
            LOG = new WeakMap();
            angular.module('home.config', [])
                .config(function ($stateProvider) {
                $stateProvider
                    .state('home', {
                    url: '/',
                    template: '<home></home>',
                    resolve: {}
                });
            });
            Home = (function () {
                function Home($log) {
                    var _this = this;
                    this.title = 'Home';
                    LOG.set(this, $log);
                    INIT.set(this, function () {
                        LOG.get(_this).log(_this.title + " component");
                    });
                    this.resolve();
                }
                Home.prototype.resolve = function () {
                    INIT.get(this)();
                };
                Home = __decorate([
                    ng_forward_1.Component({
                        selector: 'home',
                        directives: [],
                        providers: ['home.config'],
                        bindings: [home_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: home_html_text_1.default
                    }),
                    ng_forward_1.Inject('$log'), 
                    __metadata('design:paramtypes', [Object])
                ], Home);
                return Home;
            })();
            exports_1("default", Home);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOlsiSG9tZSIsIkhvbWUuY29uc3RydWN0b3IiLCJIb21lLnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBVU0sSUFBSSxFQUNKLE9BQU8sRUFDUCxHQUFHOzs7Ozs7Ozs7Ozs7O1lBRkgsSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFDckIsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFDeEIsR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFFMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDO2lCQUM5QixNQUFNLENBQUMsVUFBQyxjQUFjO2dCQUNyQixjQUFjO3FCQUNYLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ2IsR0FBRyxFQUFFLEdBQUc7b0JBQ1IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLE9BQU8sRUFBRSxFQUFFO2lCQUNaLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUw7Z0JBY0VBLGNBQVlBLElBQUlBO29CQWRsQkMsaUJBK0JDQTtvQkFoQkdBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLE1BQU1BLENBQUNBO29CQUNwQkEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQTt3QkFDYkEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBSUEsS0FBSUEsQ0FBQ0EsS0FBS0EsZUFBWUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9DQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFHSEEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtnQkFLREQsc0JBQU9BLEdBQVBBO29CQUNFRSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQTtnQkFDbkJBLENBQUNBO2dCQTlCSEY7b0JBQUNBLHNCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsTUFBTUE7d0JBQ2hCQSxVQUFVQSxFQUFFQSxFQUFFQTt3QkFDZEEsU0FBU0EsRUFBRUEsQ0FBQ0EsYUFBYUEsQ0FBQ0E7d0JBQzFCQSxRQUFRQSxFQUFFQSxDQUFDQSxrQkFBTUEsQ0FBQ0E7d0JBQ2xCQSxZQUFZQSxFQUFFQSxJQUFJQTt3QkFFbEJBLE1BQU1BLEVBQUVBLEVBQUVBO3dCQUNWQSxRQUFRQSxFQUFFQSx3QkFBUUE7cUJBQ25CQSxDQUFDQTtvQkFDREEsbUJBQU1BLENBQUNBLE1BQU1BLENBQUNBOzt5QkFxQmRBO2dCQUFEQSxXQUFDQTtZQUFEQSxDQUFDQSxBQS9CRCxJQStCQztZQS9CRCwwQkErQkMsQ0FBQSJ9