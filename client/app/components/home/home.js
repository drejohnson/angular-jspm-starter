System.register(['ng-forward', './home.html!text'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, home_html_text_1;
    var INIT, SERVICE, LOG, Home;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (home_html_text_1_1) {
                home_html_text_1 = home_html_text_1_1;
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
//# sourceMappingURL=home.js.map