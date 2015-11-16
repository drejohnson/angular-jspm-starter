System.register(['ng-forward', './logout.html!text', './logout.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, logout_html_text_1, logout_css_1;
    var AUTH, LOCATION, MDTOAST, LOG, Logout;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (logout_html_text_1_1) {
                logout_html_text_1 = logout_html_text_1_1;
            },
            function (logout_css_1_1) {
                logout_css_1 = logout_css_1_1;
            }],
        execute: function() {
            AUTH = new WeakMap();
            LOCATION = new WeakMap();
            MDTOAST = new WeakMap();
            LOG = new WeakMap();
            angular.module('logout.config', ['ui.router'])
                .config(function ($stateProvider) {
                $stateProvider
                    .state('logout', {
                    url: '/logout',
                    template: null,
                    resolve: {}
                });
            });
            Logout = (function () {
                function Logout($log, $location, $auth, $mdToast) {
                    var _this = this;
                    this.title = 'Logout';
                    LOG.set(this, $log);
                    LOCATION.set(this, $location);
                    AUTH.set(this, $auth);
                    MDTOAST.set(this, $mdToast);
                    INIT.set(this, function () {
                        LOG.get(_this).log(_this.title + " component");
                        if (!AUTH.get(_this).isAuthenticated()) {
                            return;
                        }
                        AUTH.get(_this).logout().then(function () {
                            MDTOAST.get(_this).show(MDTOAST.get(_this).simple()
                                .content('You have been logged out!')
                                .position('top left')
                                .hideDelay(3000));
                            LOCATION.get(_this).path('/');
                        });
                        LOG.get(_this).log('Logged out');
                    });
                    this.resolve();
                }
                Logout.prototype.resolve = function () {
                    INIT.get(this)();
                };
                Logout = __decorate([
                    ng_forward_1.Component({
                        selector: 'logout',
                        directives: [],
                        providers: ['logout.config'],
                        bindings: [logout_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: logout_html_text_1.default
                    }),
                    ng_forward_1.Inject('$log', '$location', '$auth', '$mdToast'), 
                    __metadata('design:paramtypes', [Object, Object, Object, Object])
                ], Logout);
                return Logout;
            })();
            exports_1("default", Logout);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nb3V0LnRzIl0sIm5hbWVzIjpbIkxvZ291dCIsIkxvZ291dC5jb25zdHJ1Y3RvciIsIkxvZ291dC5yZXNvbHZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQVVNLElBQUksRUFDSixRQUFRLEVBQ1IsT0FBTyxFQUNQLEdBQUc7Ozs7Ozs7Ozs7Ozs7WUFISCxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNyQixRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN6QixPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN4QixHQUFHLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUUxQixPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUMzQyxNQUFNLENBQUMsVUFBQyxjQUFjO2dCQUNyQixjQUFjO3FCQUNYLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ2YsR0FBRyxFQUFFLFNBQVM7b0JBQ2QsUUFBUSxFQUFFLElBQUk7b0JBQ2QsT0FBTyxFQUFFLEVBQ1I7aUJBQ0YsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFHTDtnQkFhRUEsZ0JBQVlBLElBQUlBLEVBQUVBLFNBQVNBLEVBQUVBLEtBQUtBLEVBQUVBLFFBQVFBO29CQWI5Q0MsaUJBMkNDQTtvQkE3QkdBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFFBQVFBLENBQUNBO29CQUN0QkEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3BCQSxRQUFRQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxTQUFTQSxDQUFDQSxDQUFDQTtvQkFDOUJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO29CQUN0QkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsUUFBUUEsQ0FBQ0EsQ0FBQ0E7b0JBQzVCQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQTt3QkFDYkEsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsQ0FBQ0EsR0FBR0EsQ0FBSUEsS0FBSUEsQ0FBQ0EsS0FBS0EsZUFBWUEsQ0FBQ0EsQ0FBQ0E7d0JBRTdDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxlQUFlQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFBQ0EsTUFBTUEsQ0FBQ0E7d0JBQUNBLENBQUNBO3dCQUNsREEsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7NEJBQzNCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxLQUFJQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUNwQkEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsS0FBSUEsQ0FBQ0EsQ0FBQ0EsTUFBTUEsRUFBRUE7aUNBQ3pCQSxPQUFPQSxDQUFDQSwyQkFBMkJBLENBQUNBO2lDQUNwQ0EsUUFBUUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7aUNBQ3BCQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTs0QkFDcEJBLFFBQVFBLENBQUNBLEdBQUdBLENBQUNBLEtBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO3dCQUMvQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ0hBLEdBQUdBLENBQUNBLEdBQUdBLENBQUNBLEtBQUlBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLENBQUNBO29CQUNsQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBRUhBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO2dCQUNqQkEsQ0FBQ0E7Z0JBS0RELHdCQUFPQSxHQUFQQTtvQkFDRUUsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7Z0JBQ25CQSxDQUFDQTtnQkExQ0hGO29CQUFDQSxzQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFFBQVFBO3dCQUNsQkEsVUFBVUEsRUFBRUEsRUFBRUE7d0JBQ2RBLFNBQVNBLEVBQUVBLENBQUNBLGVBQWVBLENBQUNBO3dCQUM1QkEsUUFBUUEsRUFBRUEsQ0FBQ0Esb0JBQU1BLENBQUNBO3dCQUNsQkEsWUFBWUEsRUFBRUEsSUFBSUE7d0JBRWxCQSxNQUFNQSxFQUFFQSxFQUFFQTt3QkFDVkEsUUFBUUEsRUFBRUEsMEJBQVFBO3FCQUNuQkEsQ0FBQ0E7b0JBQ0RBLG1CQUFNQSxDQUFDQSxNQUFNQSxFQUFFQSxXQUFXQSxFQUFFQSxPQUFPQSxFQUFFQSxVQUFVQSxDQUFDQTs7MkJBaUNoREE7Z0JBQURBLGFBQUNBO1lBQURBLENBQUNBLEFBM0NELElBMkNDO1lBM0NELDRCQTJDQyxDQUFBO1lBQUEsQ0FBQyJ9