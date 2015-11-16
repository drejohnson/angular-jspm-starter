System.register(['angular', 'ng-forward', '../components', '../../pipes/pipes', '../../core/blocks/blocks', './app.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, components_1, pipes_1, blocks_1, app_css_1;
    var LOG, App;
    return {
        setters:[
            function (_1) {},
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (components_1_1) {
                components_1 = components_1_1;
            },
            function (pipes_1_1) {
                pipes_1 = pipes_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (app_css_1_1) {
                app_css_1 = app_css_1_1;
            }],
        execute: function() {
            LOG = new WeakMap();
            angular.module('app.config', ['ui.router', 'ngMaterial'])
                .run(blocks_1.OnRun)
                .config(blocks_1.OnConfig);
            App = (function () {
                function App($log) {
                    this.title = 'App';
                    LOG.set(this, $log);
                    LOG.get(this).log(this.title + " component");
                }
                App = __decorate([
                    ng_forward_1.Component({
                        selector: 'app',
                        pipes: [pipes_1.default],
                        directives: [components_1.default],
                        providers: ['app.config'],
                        bindings: [app_css_1.default],
                        controllerAs: 'vm',
                        template: "\n  <div layout=\"row\" layout-fill flex>\n     <sidenav layout=\"row\"></sidenav>\n     <div layout=\"column\" flex>\n       <toolbar></toolbar>\n       <md-content layout=\"column\" flex layout-padding ui-view></md-content>\n     </div>\n   </div>\n  "
                    }),
                    ng_forward_1.Inject('$log'), 
                    __metadata('design:paramtypes', [Object])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbIkFwcCIsIkFwcC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7UUFRTSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFILEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBRTFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUN0RCxHQUFHLENBQUMsY0FBSyxDQUFDO2lCQUNWLE1BQU0sQ0FBQyxpQkFBUSxDQUFDLENBQUM7WUFPcEI7Z0JBc0JFQSxhQUFZQSxJQUFJQTtvQkFDZEMsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQ0E7b0JBQ25CQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDcEJBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLEdBQUdBLENBQUlBLElBQUlBLENBQUNBLEtBQUtBLGVBQVlBLENBQUNBLENBQUNBO2dCQUMvQ0EsQ0FBQ0E7Z0JBMUJIRDtvQkFBQ0Esc0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTt3QkFDZkEsS0FBS0EsRUFBRUEsQ0FBQ0EsZUFBU0EsQ0FBQ0E7d0JBQ2xCQSxVQUFVQSxFQUFFQSxDQUFDQSxvQkFBY0EsQ0FBQ0E7d0JBQzVCQSxTQUFTQSxFQUFFQSxDQUFDQSxZQUFZQSxDQUFDQTt3QkFDekJBLFFBQVFBLEVBQUVBLENBQUNBLGlCQUFNQSxDQUFDQTt3QkFDbEJBLFlBQVlBLEVBQUVBLElBQUlBO3dCQUdsQkEsUUFBUUEsRUFBRUEsK1BBUVRBO3FCQUNGQSxDQUFDQTtvQkFDREEsbUJBQU1BLENBQUNBLE1BQU1BLENBQUNBOzt3QkFRZEE7Z0JBQURBLFVBQUNBO1lBQURBLENBQUNBLEFBM0JELElBMkJDO1lBM0JELHFCQTJCQyxDQUFBIn0=