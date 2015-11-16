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
    var INIT, LOG, AUTH, Toolbar;
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
            AUTH = new WeakMap();
            Toolbar = (function () {
                function Toolbar($timeout, $mdSidenav, $mdUtil, $auth, $log) {
                    var _this = this;
                    Object.assign(this, {
                        $timeout: $timeout,
                        $mdSidenav: $mdSidenav,
                        $mdUtil: $mdUtil,
                        title: 'toolbar'
                    });
                    LOG.set(this, $log);
                    AUTH.set(this, $auth);
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
                    this.isAuthenticated = function () { return AUTH.get(_this).isAuthenticated(); };
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
                    ng_forward_1.Inject('$timeout', '$mdSidenav', '$mdUtil', '$auth', '$log'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object, Object])
                ], Toolbar);
                return Toolbar;
            })();
            exports_1("default", Toolbar);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvb2xiYXIudHMiXSwibmFtZXMiOlsiVG9vbGJhciIsIlRvb2xiYXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBVU0sSUFBSSxFQUNKLEdBQUcsRUFDSCxJQUFJOzs7Ozs7Ozs7Ozs7O1lBRkosSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFDckIsR0FBRyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFDcEIsSUFBSSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7WUFHM0I7Z0JBaUJFQSxpQkFBWUEsUUFBUUEsRUFBRUEsVUFBVUEsRUFBRUEsT0FBT0EsRUFBRUEsS0FBS0EsRUFBRUEsSUFBSUE7b0JBakJ4REMsaUJBd0NDQTtvQkF0QkdBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLEVBQUVBO3dCQUNsQkEsVUFBQUEsUUFBUUE7d0JBQ1JBLFlBQUFBLFVBQVVBO3dCQUNWQSxTQUFBQSxPQUFPQTt3QkFDUEEsS0FBS0EsRUFBRUEsU0FBU0E7cUJBQ2pCQSxDQUFDQSxDQUFDQTtvQkFDSEEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxLQUFLQSxDQUFDQSxDQUFDQTtvQkFDdEJBLElBQU1BLFlBQVlBLEdBQUdBLFVBQUNBLEtBQUtBO3dCQUN6QkEsS0FBS0EsR0FBR0EsS0FBS0EsSUFBSUEsTUFBTUEsQ0FBQ0E7d0JBQ3hCQSxJQUFNQSxVQUFVQSxHQUFHQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTs0QkFDdkNBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBO2lDQUNuQkEsTUFBTUEsRUFBRUE7aUNBQ1JBLElBQUlBLENBQUNBO2dDQUNKQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLEdBQUdBLEtBQUtBLEdBQUdBLGVBQWVBLENBQUNBLENBQUNBOzRCQUNqRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNSQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQTtvQkFDcEJBLENBQUNBLENBQUNBO29CQUNGQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtvQkFDekNBLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLGNBQU1BLE9BQUFBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLEtBQUlBLENBQUNBLENBQUNBLGVBQWVBLEVBQUVBLEVBQWhDQSxDQUFnQ0EsQ0FBQ0E7Z0JBQ2hFQSxDQUFDQTtnQkF2Q0hEO29CQUFDQSxzQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFNBQVNBO3dCQUNuQkEsVUFBVUEsRUFBRUEsRUFBRUE7d0JBQ2RBLFNBQVNBLEVBQUVBLEVBQUVBO3dCQUNiQSxRQUFRQSxFQUFFQSxDQUFDQSxxQkFBTUEsQ0FBQ0E7d0JBQ2xCQSxZQUFZQSxFQUFFQSxJQUFJQTt3QkFFbEJBLE1BQU1BLEVBQUVBLEVBQUVBO3dCQUNWQSxRQUFRQSxFQUFFQSwyQkFBUUE7cUJBQ25CQSxDQUFDQTtvQkFDREEsbUJBQU1BLENBQUNBLFVBQVVBLEVBQUVBLFlBQVlBLEVBQUVBLFNBQVNBLEVBQUVBLE9BQU9BLEVBQUVBLE1BQU1BLENBQUNBOzs0QkE4QjVEQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0FBQ0EsQUF4Q0QsSUF3Q0M7WUF4Q0QsNkJBd0NDLENBQUE7WUFBQSxDQUFDIn0=