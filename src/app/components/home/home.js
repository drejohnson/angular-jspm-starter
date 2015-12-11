System.register(['ng-forward', './home.html!text', './home.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, home_html_text_1, home_css_1;
    var Home;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (home_html_text_1_1) {
                home_html_text_1 = home_html_text_1_1;
            },
            function (home_css_1_1) {
                home_css_1 = home_css_1_1;
            }],
        execute: function() {
            Home = (function () {
                function Home(PageTitleService, TestService, $log) {
                    this.PageTitleService = PageTitleService;
                    this.TestService = TestService;
                    this.$log = $log;
                    this.title = PageTitleService.getTitle();
                    this.resolve();
                }
                Home.setTags = function (PageTitleService, PageMetaTagsService) {
                    return {
                        title: PageTitleService.setTitle('Home'),
                        description: PageMetaTagsService.setMetaDescription('This is home page description'),
                        image: PageMetaTagsService.setMetaImage('/images/logos/logo-red.svg')
                    };
                };
                Home.prototype.resolve = function () {
                    var _this = this;
                    this.$log.log(this.title + " component");
                    this.TestService.getValue().then(function (val) { return _this.num = val; });
                };
                __decorate([
                    ng_forward_1.Resolve(),
                    ng_forward_1.Inject('PageTitleService', 'PageMetaTagsService'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], Home, "setTags", null);
                Home = __decorate([
                    ng_forward_1.Component({
                        selector: 'home',
                        directives: [],
                        providers: [],
                        bindings: [home_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: home_html_text_1.default
                    }),
                    ng_forward_1.Inject('PageTitleService', 'TestService', '$log'), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], Home);
                return Home;
            })();
            exports_1("default", Home);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOlsiSG9tZSIsIkhvbWUuY29uc3RydWN0b3IiLCJIb21lLnNldFRhZ3MiLCJIb21lLnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVVBO2dCQXlCRUEsY0FBb0JBLGdCQUFnQkEsRUFBVUEsV0FBV0EsRUFBVUEsSUFBSUE7b0JBQW5EQyxxQkFBZ0JBLEdBQWhCQSxnQkFBZ0JBLENBQUFBO29CQUFVQSxnQkFBV0EsR0FBWEEsV0FBV0EsQ0FBQUE7b0JBQVVBLFNBQUlBLEdBQUpBLElBQUlBLENBQUFBO29CQUNyRUEsSUFBSUEsQ0FBQ0EsS0FBS0EsR0FBR0EsZ0JBQWdCQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtvQkFFekNBLElBQUlBLENBQUNBLE9BQU9BLEVBQUVBLENBQUNBO2dCQUNqQkEsQ0FBQ0E7Z0JBWE1ELFlBQU9BLEdBRmRBLFVBRWVBLGdCQUFnQkEsRUFBRUEsbUJBQW1CQTtvQkFDbERFLE1BQU1BLENBQUNBO3dCQUNMQSxLQUFLQSxFQUFFQSxnQkFBZ0JBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBO3dCQUN4Q0EsV0FBV0EsRUFBRUEsbUJBQW1CQSxDQUFDQSxrQkFBa0JBLENBQUNBLCtCQUErQkEsQ0FBQ0E7d0JBQ3BGQSxLQUFLQSxFQUFFQSxtQkFBbUJBLENBQUNBLFlBQVlBLENBQUNBLDRCQUE0QkEsQ0FBQ0E7cUJBQ3RFQSxDQUFDQTtnQkFDSkEsQ0FBQ0E7Z0JBVURGLHNCQUFPQSxHQUFQQTtvQkFBQUcsaUJBR0NBO29CQUZDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxlQUFZQSxDQUFDQSxDQUFDQTtvQkFDekNBLElBQUlBLENBQUNBLFdBQVdBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFVBQUFBLEdBQUdBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLEdBQUdBLEdBQUdBLEdBQUdBLEVBQWRBLENBQWNBLENBQUNBLENBQUNBO2dCQUMxREEsQ0FBQ0E7Z0JBckJESDtvQkFBQ0Esb0JBQU9BLEVBQUVBO29CQUNUQSxtQkFBTUEsQ0FBQ0Esa0JBQWtCQSxFQUFFQSxxQkFBcUJBLENBQUNBOzs7O21CQUMzQ0EsZUFBT0EsUUFNYkE7Z0JBeEJIQTtvQkFBQ0Esc0JBQVNBLENBQUNBO3dCQUNUQSxRQUFRQSxFQUFFQSxNQUFNQTt3QkFDaEJBLFVBQVVBLEVBQUVBLEVBQUVBO3dCQUNkQSxTQUFTQSxFQUFFQSxFQUFFQTt3QkFDYkEsUUFBUUEsRUFBRUEsQ0FBQ0Esa0JBQU1BLENBQUNBO3dCQUNsQkEsWUFBWUEsRUFBRUEsSUFBSUE7d0JBRWxCQSxNQUFNQSxFQUFFQSxFQUFFQTt3QkFDVkEsUUFBUUEsRUFBRUEsd0JBQVFBO3FCQUNuQkEsQ0FBQ0E7b0JBQ0RBLG1CQUFNQSxDQUFDQSxrQkFBa0JBLEVBQUVBLGFBQWFBLEVBQUVBLE1BQU1BLENBQUNBOzt5QkE0QmpEQTtnQkFBREEsV0FBQ0E7WUFBREEsQ0FBQ0EsQUF0Q0QsSUFzQ0M7WUF0Q0QsMEJBc0NDLENBQUEifQ==