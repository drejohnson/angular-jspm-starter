System.register(['ng-forward', './toolbar.html!text', './toolbar.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, toolbar_html_text_1, toolbar_css_1;
    var INIT, LOG, Toolbar;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (toolbar_html_text_1_1) {
                toolbar_html_text_1 = toolbar_html_text_1_1;
            },
            function (toolbar_css_1_1) {
                toolbar_css_1 = toolbar_css_1_1;
            }],
        execute: function() {
            INIT = new WeakMap();
            LOG = new WeakMap();
            Toolbar = (function () {
                function Toolbar($timeout, $mdSidenav, $mdUtil, $log) {
                    var _this = this;
                    Object.assign(this, {
                        $timeout: $timeout,
                        $mdSidenav: $mdSidenav,
                        $mdUtil: $mdUtil,
                        title: 'toolbar'
                    });
                    LOG.set(this, $log);
                    var buildToggler = function (navID) {
                        navID = navID || 'left';
                        var debounceFn = _this.$mdUtil.debounce(function () {
                            _this.$mdSidenav(navID)
                                .toggle()
                                .then(function () {
                                LOG.get(_this).log('Sidenav toggle(' + navID + ') initialized');
                            });
                        }, 200);
                        return debounceFn;
                    };
                    this.openLeftMenu = buildToggler('left');
                }
                Toolbar = __decorate([
                    ng_forward_1.Component({
                        selector: 'toolbar',
                        directives: [],
                        providers: [],
                        bindings: [toolbar_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: toolbar_html_text_1.default
                    }),
                    ng_forward_1.Inject('$timeout', '$mdSidenav', '$mdUtil', '$log'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object])
                ], Toolbar);
                return Toolbar;
            })();
            exports_1("default", Toolbar);
            ;
        }
    }
});
//# sourceMappingURL=toolbar.js.map