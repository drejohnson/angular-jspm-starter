System.register(['ng-forward', './profile.html!text', './profile.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, profile_html_text_1, profile_css_1;
    var Profile;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (profile_html_text_1_1) {
                profile_html_text_1 = profile_html_text_1_1;
            },
            function (profile_css_1_1) {
                profile_css_1 = profile_css_1_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile($log, auth) {
                    this.$log = $log;
                    this.auth = auth;
                    this.title = 'Profile';
                    this.resolve();
                }
                Profile.prototype.resolve = function () {
                    this.profile = this.auth.profile;
                    this.$log.log(this.profile);
                };
                Profile = __decorate([
                    ng_forward_1.Component({
                        selector: 'profile',
                        directives: [],
                        providers: [],
                        bindings: [profile_css_1.default],
                        controllerAs: 'vm',
                        template: profile_html_text_1.default
                    }),
                    ng_forward_1.Inject('$log', 'auth'), 
                    __metadata('design:paramtypes', [Object, Object])
                ], Profile);
                return Profile;
            })();
            exports_1("default", Profile);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOlsiUHJvZmlsZSIsIlByb2ZpbGUuY29uc3RydWN0b3IiLCJQcm9maWxlLnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQWFFQSxpQkFBbUJBLElBQUlBLEVBQVNBLElBQUlBO29CQUFqQkMsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBQUE7b0JBQVNBLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO29CQUNsQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0E7b0JBRXZCQSxJQUFJQSxDQUFDQSxPQUFPQSxFQUFFQSxDQUFDQTtnQkFDakJBLENBQUNBO2dCQUVERCx5QkFBT0EsR0FBUEE7b0JBRUVFLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBO29CQUNqQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzlCQSxDQUFDQTtnQkF2QkhGO29CQUFDQSxzQkFBU0EsQ0FBQ0E7d0JBQ1RBLFFBQVFBLEVBQUVBLFNBQVNBO3dCQUNuQkEsVUFBVUEsRUFBRUEsRUFBRUE7d0JBQ2RBLFNBQVNBLEVBQUVBLEVBQUVBO3dCQUNiQSxRQUFRQSxFQUFFQSxDQUFDQSxxQkFBTUEsQ0FBQ0E7d0JBQ2xCQSxZQUFZQSxFQUFFQSxJQUFJQTt3QkFDbEJBLFFBQVFBLEVBQUVBLDJCQUFRQTtxQkFDbkJBLENBQUNBO29CQUNEQSxtQkFBTUEsQ0FBQ0EsTUFBTUEsRUFBRUEsTUFBTUEsQ0FBQ0E7OzRCQWdCdEJBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQUFDQSxBQXhCRCxJQXdCQztZQXhCRCw2QkF3QkMsQ0FBQTtZQUFBLENBQUMifQ==