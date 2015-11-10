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
                function Sidenav($mdSidenav, $log) {
                    Object.assign(this, {
                        $mdSidenav: $mdSidenav,
                        title: 'sidenav',
                        openLeftMenu: function () { return $mdSidenav('left').toggle(); },
                        navigation: [
                            { state: 'docu-series', label: 'Docu-Series' },
                            { state: 'radio-tv-film', label: 'Radio-TV-Film' },
                            { state: 'music', label: 'Music' },
                            { state: 'comedy', label: 'Comedy' },
                            { state: 'lifestyle', label: 'Lifestyle' }
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
                    __metadata('design:paramtypes', [Object, Object])
                ], Sidenav);
                return Sidenav;
            })();
            exports_1("default", Sidenav);
            ;
        }
    }
});
//# sourceMappingURL=sidenav.js.map