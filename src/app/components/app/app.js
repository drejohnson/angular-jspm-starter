System.register(['angular', 'ng-forward', '../../pipes/pipes', '../../core/blocks/blocks', '../toolbar/toolbar', '../sidenav/sidenav', '../home/home', '../connect/connect', '../profile/profile', './app.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, pipes_1, blocks_1, toolbar_1, sidenav_1, home_1, connect_1, profile_1, app_css_1;
    var App;
    return {
        setters:[
            function (_1) {},
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (connect_1_1) {
                connect_1 = connect_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (app_css_1_1) {
                app_css_1 = app_css_1_1;
            }],
        execute: function() {
            angular.module('app.core', [])
                .run(blocks_1.OnRun)
                .config(blocks_1.OnConfig);
            App = (function () {
                function App($log) {
                    this.$log = $log;
                    this.title = 'App';
                    this.$log.log(this.title + " component");
                }
                App = __decorate([
                    ng_forward_1.Component({
                        selector: 'app',
                        pipes: [pipes_1.default],
                        directives: [sidenav_1.default, toolbar_1.default],
                        providers: ['app.core'],
                        bindings: [app_css_1.default],
                        controllerAs: 'vm',
                        template: "\n  <div layout=\"row\" layout-fill flex>\n     <sidenav layout=\"row\"></sidenav>\n     <div layout=\"column\" flex>\n       <toolbar></toolbar>\n       <md-content layout=\"column\" flex ng-outlet></md-content>\n     </div>\n   </div>\n  "
                    }),
                    ng_forward_1.StateConfig([
                        { name: 'home', url: '/', component: home_1.default },
                        { name: 'connect', url: '/connect', component: connect_1.default },
                        { name: 'profile', url: '/profile', component: profile_1.default, data: { requiresLogin: true } }
                    ]),
                    ng_forward_1.Inject('$log'), 
                    __metadata('design:paramtypes', [Object])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWVBLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztpQkFDM0IsR0FBRyxDQUFDLGNBQUssQ0FBQztpQkFDVixNQUFNLENBQUMsaUJBQVEsQ0FBQyxDQUFDO1lBT3BCO2dCQTJCRUEsYUFBbUJBLElBQUlBO29CQUFKQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtvQkFDckJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO29CQUNuQkEsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBSUEsSUFBSUEsQ0FBQ0EsS0FBS0EsZUFBWUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzNDQSxDQUFDQTtnQkE5QkhEO29CQUFDQSxzQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLEtBQUtBO3dCQUNmQSxLQUFLQSxFQUFFQSxDQUFDQSxlQUFTQSxDQUFDQTt3QkFDbEJBLFVBQVVBLEVBQUVBLENBQUNBLGlCQUFPQSxFQUFFQSxpQkFBT0EsQ0FBQ0E7d0JBQzlCQSxTQUFTQSxFQUFFQSxDQUFDQSxVQUFVQSxDQUFDQTt3QkFDdkJBLFFBQVFBLEVBQUVBLENBQUNBLGlCQUFNQSxDQUFDQTt3QkFDbEJBLFlBQVlBLEVBQUVBLElBQUlBO3dCQUdsQkEsUUFBUUEsRUFBRUEsa1BBUVRBO3FCQUNGQSxDQUFDQTtvQkFDREEsd0JBQVdBLENBQUNBO3dCQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSxjQUFJQSxFQUFFQTt3QkFDM0NBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLGlCQUFPQSxFQUFFQTt3QkFDeERBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLGlCQUFPQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxhQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQTtxQkFDeEZBLENBQUNBO29CQUNEQSxtQkFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7O3dCQU9kQTtnQkFBREEsVUFBQ0E7WUFBREEsQ0FBQ0EsQUEvQkQsSUErQkM7WUEvQkQscUJBK0JDLENBQUEifQ==