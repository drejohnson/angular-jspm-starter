System.register(['ng-forward', './sidenav.html!text', './sidenav.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, sidenav_html_text_1, sidenav_css_1;
    var Sidenav;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (sidenav_html_text_1_1) {
                sidenav_html_text_1 = sidenav_html_text_1_1;
            },
            function (sidenav_css_1_1) {
                sidenav_css_1 = sidenav_css_1_1;
            }],
        execute: function() {
            Sidenav = (function () {
                function Sidenav(MenuService, $mdSidenav, $log) {
                    this.MenuService = MenuService;
                    this.$mdSidenav = $mdSidenav;
                    this.$log = $log;
                    Object.assign(this, {
                        $mdSidenav: $mdSidenav,
                        $log: $log,
                        title: 'sidenav',
                        openLeftMenu: function () { return $mdSidenav('left').toggle(); },
                        sections: [
                            {
                                name: 'Docu-Series',
                                state: 'docu-series'
                            },
                            {
                                name: 'Radio-TV-Film',
                                type: 'link',
                                state: 'radio-tv-film'
                            },
                            {
                                name: 'Music',
                                state: 'music'
                            },
                            {
                                name: 'Comedy',
                                state: 'comedy'
                            },
                            {
                                name: 'Lifestyle',
                                state: 'lifestyle'
                            },
                            {
                                name: 'Audio + Talk',
                                state: 'audio-talk'
                            },
                            {
                                name: 'Blog',
                                state: 'blog'
                            }
                        ]
                    });
                }
                Sidenav = __decorate([
                    ng_forward_1.Component({
                        selector: 'sidenav',
                        directives: [],
                        providers: [],
                        bindings: [sidenav_css_1.default],
                        controllerAs: 'vm',
                        template: sidenav_html_text_1.default
                    }),
                    ng_forward_1.Inject('$mdSidenav', '$log'), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], Sidenav);
                return Sidenav;
            })();
            exports_1("default", Sidenav);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZGVuYXYudHMiXSwibmFtZXMiOlsiU2lkZW5hdiIsIlNpZGVuYXYuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQVlFQSxpQkFBb0JBLFdBQVdBLEVBQVVBLFVBQVVBLEVBQVVBLElBQUlBO29CQUE3Q0MsZ0JBQVdBLEdBQVhBLFdBQVdBLENBQUFBO29CQUFVQSxlQUFVQSxHQUFWQSxVQUFVQSxDQUFBQTtvQkFBVUEsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBQUE7b0JBQy9EQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQTt3QkFDbEJBLFlBQUFBLFVBQVVBO3dCQUNWQSxNQUFBQSxJQUFJQTt3QkFDSkEsS0FBS0EsRUFBRUEsU0FBU0E7d0JBQ2hCQSxZQUFZQSxFQUFFQSxjQUFNQSxPQUFBQSxVQUFVQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxNQUFNQSxFQUFFQSxFQUEzQkEsQ0FBMkJBO3dCQUMvQ0EsUUFBUUEsRUFBRUE7NEJBQ1JBO2dDQUNFQSxJQUFJQSxFQUFFQSxhQUFhQTtnQ0FDbkJBLEtBQUtBLEVBQUVBLGFBQWFBOzZCQUNyQkE7NEJBQ0RBO2dDQUNFQSxJQUFJQSxFQUFFQSxlQUFlQTtnQ0FDckJBLElBQUlBLEVBQUVBLE1BQU1BO2dDQUNaQSxLQUFLQSxFQUFFQSxlQUFlQTs2QkFDdkJBOzRCQUNEQTtnQ0FDRUEsSUFBSUEsRUFBRUEsT0FBT0E7Z0NBQ2JBLEtBQUtBLEVBQUVBLE9BQU9BOzZCQUNmQTs0QkFDREE7Z0NBQ0VBLElBQUlBLEVBQUVBLFFBQVFBO2dDQUNkQSxLQUFLQSxFQUFFQSxRQUFRQTs2QkFDaEJBOzRCQUNEQTtnQ0FDRUEsSUFBSUEsRUFBRUEsV0FBV0E7Z0NBQ2pCQSxLQUFLQSxFQUFFQSxXQUFXQTs2QkFDbkJBOzRCQUNEQTtnQ0FDRUEsSUFBSUEsRUFBRUEsY0FBY0E7Z0NBQ3BCQSxLQUFLQSxFQUFFQSxZQUFZQTs2QkFDcEJBOzRCQUNEQTtnQ0FDRUEsSUFBSUEsRUFBRUEsTUFBTUE7Z0NBQ1pBLEtBQUtBLEVBQUVBLE1BQU1BOzZCQUNkQTt5QkFDRkE7cUJBQ0ZBLENBQUNBLENBQUNBO2dCQUNMQSxDQUFDQTtnQkFsREhEO29CQUFDQSxzQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFNBQVNBO3dCQUNuQkEsVUFBVUEsRUFBRUEsRUFBRUE7d0JBQ2RBLFNBQVNBLEVBQUVBLEVBQUVBO3dCQUNiQSxRQUFRQSxFQUFFQSxDQUFDQSxxQkFBTUEsQ0FBQ0E7d0JBQ2xCQSxZQUFZQSxFQUFFQSxJQUFJQTt3QkFDbEJBLFFBQVFBLEVBQUVBLDJCQUFRQTtxQkFDbkJBLENBQUNBO29CQUNEQSxtQkFBTUEsQ0FBQ0EsWUFBWUEsRUFBRUEsTUFBTUEsQ0FBQ0E7OzRCQTJDNUJBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQUFDQSxBQW5ERCxJQW1EQztZQW5ERCw2QkFtREMsQ0FBQTtZQUFBLENBQUMifQ==