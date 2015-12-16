System.register(['angular', 'ng-forward', '../../pipes/pipes', '../../core/blocks/blocks', '../toolbar/toolbar', '../sidenav/sidenav', '../home/home', '../connect/connect', '../profile/profile', 'angular-material/angular-material.css!', './app.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, pipes_1, blocks_1, toolbar_1, sidenav_1, home_1, connect_1, profile_1, angular_material_css_1, app_css_1;
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
            function (angular_material_css_1_1) {
                angular_material_css_1 = angular_material_css_1_1;
            },
            function (app_css_1_1) {
                app_css_1 = app_css_1_1;
            }],
        execute: function() {
            angular.module('app.core', [])
                .run(blocks_1.OnRun)
                .config(blocks_1.OnConfig);
            App = (function () {
                function App(PageTitleService, $log) {
                    this.PageTitleService = PageTitleService;
                    this.$log = $log;
                    this.title = 'App';
                    this.$log.log(this.title + " component");
                }
                App.prototype.getTitle = function () {
                    return this.PageTitleService.getTitle();
                };
                App = __decorate([
                    ng_forward_1.Component({
                        selector: 'app',
                        pipes: [pipes_1.default],
                        directives: [sidenav_1.default, toolbar_1.default],
                        providers: ['app.core'],
                        bindings: [angular_material_css_1.default, app_css_1.default],
                        controllerAs: 'vm',
                        template: "\n    <div layout=\"row\" layout-fill flex menu-toggle>\n      <sidenav layout=\"row\"></sidenav>\n      <div layout=\"column\" flex>\n       <toolbar></toolbar>\n       <md-content layout=\"column\" flex ng-outlet></md-content>\n      </div>\n    </div>\n  "
                    }),
                    ng_forward_1.StateConfig([
                        { name: 'home', url: '/', component: home_1.default },
                        { name: 'connect', url: '/connect', component: connect_1.default },
                        { name: 'profile', url: '/profile', component: profile_1.default, data: { requiresLogin: true } }
                    ]),
                    ng_forward_1.Inject('PageTitleService', '$log'), 
                    __metadata('design:paramtypes', [Object, Object])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciIsIkFwcC5nZXRUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWtCQSxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7aUJBQzNCLEdBQUcsQ0FBQyxjQUFLLENBQUM7aUJBQ1YsTUFBTSxDQUFDLGlCQUFRLENBQUMsQ0FBQztZQU9wQjtnQkEyQkVBLGFBQW1CQSxnQkFBZ0JBLEVBQVNBLElBQUlBO29CQUE3QkMscUJBQWdCQSxHQUFoQkEsZ0JBQWdCQSxDQUFBQTtvQkFBU0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBQUE7b0JBQzlDQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFDQTtvQkFDbkJBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUlBLElBQUlBLENBQUNBLEtBQUtBLGVBQVlBLENBQUNBLENBQUNBO2dCQUMzQ0EsQ0FBQ0E7Z0JBQ0RELHNCQUFRQSxHQUFSQTtvQkFDRUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDMUNBLENBQUNBO2dCQWpDSEY7b0JBQUNBLHNCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsS0FBS0E7d0JBQ2ZBLEtBQUtBLEVBQUVBLENBQUNBLGVBQVNBLENBQUNBO3dCQUNsQkEsVUFBVUEsRUFBRUEsQ0FBQ0EsaUJBQU9BLEVBQUVBLGlCQUFPQSxDQUFDQTt3QkFDOUJBLFNBQVNBLEVBQUVBLENBQUNBLFVBQVVBLENBQUNBO3dCQUN2QkEsUUFBUUEsRUFBRUEsQ0FBQ0EsOEJBQVNBLEVBQUVBLGlCQUFNQSxDQUFDQTt3QkFDN0JBLFlBQVlBLEVBQUVBLElBQUlBO3dCQUdsQkEsUUFBUUEsRUFBRUEsb1FBUVRBO3FCQUNGQSxDQUFDQTtvQkFDREEsd0JBQVdBLENBQUNBO3dCQUNYQSxFQUFFQSxJQUFJQSxFQUFFQSxNQUFNQSxFQUFFQSxHQUFHQSxFQUFFQSxHQUFHQSxFQUFFQSxTQUFTQSxFQUFFQSxjQUFJQSxFQUFFQTt3QkFDM0NBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLGlCQUFPQSxFQUFFQTt3QkFDeERBLEVBQUVBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLEdBQUdBLEVBQUVBLFVBQVVBLEVBQUVBLFNBQVNBLEVBQUVBLGlCQUFPQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQSxhQUFhQSxFQUFFQSxJQUFJQSxFQUFFQSxFQUFFQTtxQkFDeEZBLENBQUNBO29CQUNEQSxtQkFBTUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxNQUFNQSxDQUFDQTs7d0JBa0JsQ0E7Z0JBQURBLFVBQUNBO1lBQURBLENBQUNBLEFBMUNELElBMENDO1lBMUNELHFCQTBDQyxDQUFBIn0=