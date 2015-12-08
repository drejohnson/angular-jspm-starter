System.register(['ng-forward', './toolbar.html!text', './toolbar.css!', '../logout/logout'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, toolbar_html_text_1, toolbar_css_1, logout_1;
    var Toolbar;
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
            },
            function (logout_1_1) {
                logout_1 = logout_1_1;
            }],
        execute: function() {
            Toolbar = (function () {
                function Toolbar(auth, $timeout, $mdSidenav, $mdUtil, $log) {
                    var _this = this;
                    this.auth = auth;
                    this.$timeout = $timeout;
                    this.$mdSidenav = $mdSidenav;
                    this.$mdUtil = $mdUtil;
                    this.$log = $log;
                    Object.assign(this, {
                        title: 'toolbar'
                    });
                    var buildToggler = function (navID) {
                        navID = navID || 'left';
                        var debounceFn = _this.$mdUtil.debounce(function () {
                            _this.$mdSidenav(navID)
                                .toggle()
                                .then(function () {
                                _this.$log.log('Sidenav toggle(' + navID + ') initialized');
                            });
                        }, 200);
                        return debounceFn;
                    };
                    this.openLeftMenu = buildToggler('left');
                }
                Toolbar = __decorate([
                    ng_forward_1.Component({
                        selector: 'toolbar',
                        directives: [logout_1.default],
                        providers: [],
                        bindings: [toolbar_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: toolbar_html_text_1.default
                    }),
                    ng_forward_1.Inject('auth', '$timeout', '$mdSidenav', '$mdUtil', '$log'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object, Object])
                ], Toolbar);
                return Toolbar;
            })();
            exports_1("default", Toolbar);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvb2xiYXIudHMiXSwibmFtZXMiOlsiVG9vbGJhciIsIlRvb2xiYXIuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQWNFQSxpQkFBbUJBLElBQUlBLEVBQVNBLFFBQVFBLEVBQVNBLFVBQVVBLEVBQVNBLE9BQU9BLEVBQVNBLElBQUlBO29CQWQxRkMsaUJBK0JDQTtvQkFqQm9CQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtvQkFBU0EsYUFBUUEsR0FBUkEsUUFBUUEsQ0FBQUE7b0JBQVNBLGVBQVVBLEdBQVZBLFVBQVVBLENBQUFBO29CQUFTQSxZQUFPQSxHQUFQQSxPQUFPQSxDQUFBQTtvQkFBU0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBQUE7b0JBQ3RGQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQTt3QkFDbEJBLEtBQUtBLEVBQUVBLFNBQVNBO3FCQUNqQkEsQ0FBQ0EsQ0FBQ0E7b0JBQ0hBLElBQU1BLFlBQVlBLEdBQUdBLFVBQUNBLEtBQUtBO3dCQUN6QkEsS0FBS0EsR0FBR0EsS0FBS0EsSUFBSUEsTUFBTUEsQ0FBQ0E7d0JBQ3hCQSxJQUFNQSxVQUFVQSxHQUFHQSxLQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxRQUFRQSxDQUFDQTs0QkFDdkNBLEtBQUlBLENBQUNBLFVBQVVBLENBQUNBLEtBQUtBLENBQUNBO2lDQUNuQkEsTUFBTUEsRUFBRUE7aUNBQ1JBLElBQUlBLENBQUNBO2dDQUNKQSxLQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxpQkFBaUJBLEdBQUdBLEtBQUtBLEdBQUdBLGVBQWVBLENBQUNBLENBQUNBOzRCQUM3REEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ1BBLENBQUNBLEVBQUVBLEdBQUdBLENBQUNBLENBQUNBO3dCQUNSQSxNQUFNQSxDQUFDQSxVQUFVQSxDQUFDQTtvQkFDcEJBLENBQUNBLENBQUNBO29CQUNGQSxJQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQTtnQkFDM0NBLENBQUNBO2dCQTlCSEQ7b0JBQUNBLHNCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsU0FBU0E7d0JBQ25CQSxVQUFVQSxFQUFFQSxDQUFDQSxnQkFBTUEsQ0FBQ0E7d0JBQ3BCQSxTQUFTQSxFQUFFQSxFQUFFQTt3QkFDYkEsUUFBUUEsRUFBRUEsQ0FBQ0EscUJBQU1BLENBQUNBO3dCQUNsQkEsWUFBWUEsRUFBRUEsSUFBSUE7d0JBRWxCQSxNQUFNQSxFQUFFQSxFQUFFQTt3QkFDVkEsUUFBUUEsRUFBRUEsMkJBQVFBO3FCQUNuQkEsQ0FBQ0E7b0JBQ0RBLG1CQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxVQUFVQSxFQUFFQSxZQUFZQSxFQUFFQSxTQUFTQSxFQUFFQSxNQUFNQSxDQUFDQTs7NEJBcUIzREE7Z0JBQURBLGNBQUNBO1lBQURBLENBQUNBLEFBL0JELElBK0JDO1lBL0JELDZCQStCQyxDQUFBO1lBQUEsQ0FBQyJ9