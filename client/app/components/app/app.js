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
//# sourceMappingURL=app.js.map