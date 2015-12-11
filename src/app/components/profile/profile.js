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
                Profile.setTags = function (PageTitleService, PageMetaTagsService) {
                    return {
                        title: PageTitleService.setTitle('Profile'),
                        description: PageMetaTagsService.setMetaDescription('This is profile page description'),
                        image: PageMetaTagsService.setMetaImage('/images/logos/logo-red.svg')
                    };
                };
                Profile.prototype.resolve = function () {
                    this.profile = this.auth.profile;
                    this.$log.log(this.profile);
                };
                __decorate([
                    ng_forward_1.Resolve(),
                    ng_forward_1.Inject('PageTitleService', 'PageMetaTagsService'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], Profile, "setTags", null);
                Profile = __decorate([
                    ng_forward_1.Component({
                        selector: 'profile',
                        directives: [],
                        providers: [],
                        bindings: [profile_css_1.default],
                        controllerAs: 'vm',
                        template: profile_html_text_1.default
                    }),
                    ng_forward_1.Inject('PageTitleService', '$log', 'auth'), 
                    __metadata('design:paramtypes', [Object, Object])
                ], Profile);
                return Profile;
            })();
            exports_1("default", Profile);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2ZpbGUudHMiXSwibmFtZXMiOlsiUHJvZmlsZSIsIlByb2ZpbGUuY29uc3RydWN0b3IiLCJQcm9maWxlLnNldFRhZ3MiLCJQcm9maWxlLnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQXNCRUEsaUJBQW1CQSxJQUFJQSxFQUFTQSxJQUFJQTtvQkFBakJDLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO29CQUFTQSxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtvQkFDbENBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBO29CQUV2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtnQkFYTUQsZUFBT0EsR0FGZEEsVUFFZUEsZ0JBQWdCQSxFQUFFQSxtQkFBbUJBO29CQUNsREUsTUFBTUEsQ0FBQ0E7d0JBQ0xBLEtBQUtBLEVBQUVBLGdCQUFnQkEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7d0JBQzNDQSxXQUFXQSxFQUFFQSxtQkFBbUJBLENBQUNBLGtCQUFrQkEsQ0FBQ0Esa0NBQWtDQSxDQUFDQTt3QkFDdkZBLEtBQUtBLEVBQUVBLG1CQUFtQkEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsNEJBQTRCQSxDQUFDQTtxQkFDdEVBLENBQUNBO2dCQUNKQSxDQUFDQTtnQkFPREYseUJBQU9BLEdBQVBBO29CQUVFRyxJQUFJQSxDQUFDQSxPQUFPQSxHQUFHQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQTtvQkFDakNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLENBQUNBO2dCQUM5QkEsQ0FBQ0E7Z0JBbkJESDtvQkFBQ0Esb0JBQU9BLEVBQUVBO29CQUNUQSxtQkFBTUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxxQkFBcUJBLENBQUNBOzs7O21CQUMzQ0Esa0JBQU9BLFFBTWJBO2dCQXJCSEE7b0JBQUNBLHNCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsU0FBU0E7d0JBQ25CQSxVQUFVQSxFQUFFQSxFQUFFQTt3QkFDZEEsU0FBU0EsRUFBRUEsRUFBRUE7d0JBQ2JBLFFBQVFBLEVBQUVBLENBQUNBLHFCQUFNQSxDQUFDQTt3QkFDbEJBLFlBQVlBLEVBQUVBLElBQUlBO3dCQUNsQkEsUUFBUUEsRUFBRUEsMkJBQVFBO3FCQUNuQkEsQ0FBQ0E7b0JBQ0RBLG1CQUFNQSxDQUFDQSxrQkFBa0JBLEVBQUVBLE1BQU1BLEVBQUVBLE1BQU1BLENBQUNBOzs0QkF5QjFDQTtnQkFBREEsY0FBQ0E7WUFBREEsQ0FBQ0EsQUFqQ0QsSUFpQ0M7WUFqQ0QsNkJBaUNDLENBQUE7WUFBQSxDQUFDIn0=