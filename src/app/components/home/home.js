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
    var INIT, SERVICE, LOG, ELEM, ATTRS, Home;
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
            ELEM = new WeakMap();
            ATTRS = new WeakMap();
            angular.module('home.config', [])
                .config(function ($stateProvider) {
                $stateProvider
                    .state('home', {
                    url: '/',
                    template: '<home x-large></home>',
                    resolve: {}
                });
            });
            Home = (function () {
                function Home($log, $attrs, $element) {
                    var _this = this;
                    LOG.set(this, $log);
                    ELEM.set(this, $element);
                    ATTRS.set(this, $attrs);
                    this.title = 'Home';
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
                    ng_forward_1.Inject('$log', '$attrs', '$element'), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], Home);
                return Home;
            })();
            exports_1("default", Home);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOlsiSG9tZSIsIkhvbWUuY29uc3RydWN0b3IiLCJIb21lLnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBVU0sSUFBSSxFQUNKLE9BQU8sRUFDUCxHQUFHLEVBQ0gsSUFBSSxFQUNKLEtBQUs7Ozs7Ozs7Ozs7Ozs7WUFKTCxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNyQixPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN4QixHQUFHLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNwQixJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNyQixLQUFLLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUU1QixPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUM7aUJBQzlCLE1BQU0sQ0FBQyxVQUFDLGNBQWM7Z0JBQ3JCLGNBQWM7cUJBQ1gsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFDYixHQUFHLEVBQUUsR0FBRztvQkFDUixRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxPQUFPLEVBQUUsRUFBRTtpQkFDWixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUVMO2dCQWNFQSxjQUFZQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFFQSxRQUFRQTtvQkFkcENDLGlCQWlDQ0E7b0JBbEJHQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDcEJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO29CQUN6QkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxNQUFNQSxDQUFDQTtvQkFDcEJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBO3dCQUNiQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFJQSxLQUFJQSxDQUFDQSxLQUFLQSxlQUFZQSxDQUFDQSxDQUFDQTtvQkFDL0NBLENBQUNBLENBQUNBLENBQUNBO29CQUdIQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDakJBLENBQUNBO2dCQUtERCxzQkFBT0EsR0FBUEE7b0JBQ0VFLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO2dCQUNuQkEsQ0FBQ0E7Z0JBaENIRjtvQkFBQ0Esc0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFVBQVVBLEVBQUVBLEVBQUVBO3dCQUNkQSxTQUFTQSxFQUFFQSxDQUFDQSxhQUFhQSxDQUFDQTt3QkFDMUJBLFFBQVFBLEVBQUVBLENBQUNBLGtCQUFNQSxDQUFDQTt3QkFDbEJBLFlBQVlBLEVBQUVBLElBQUlBO3dCQUVsQkEsTUFBTUEsRUFBRUEsRUFBRUE7d0JBQ1ZBLFFBQVFBLEVBQUVBLHdCQUFRQTtxQkFDbkJBLENBQUNBO29CQUNEQSxtQkFBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsUUFBUUEsRUFBRUEsVUFBVUEsQ0FBQ0E7O3lCQXVCcENBO2dCQUFEQSxXQUFDQTtZQUFEQSxDQUFDQSxBQWpDRCxJQWlDQztZQWpDRCwwQkFpQ0MsQ0FBQSJ9