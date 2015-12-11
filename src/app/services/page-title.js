System.register(['ng-forward'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1;
    var PageTitleService, PAGE_TITLE_SERVICE_BINDINGS;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            }],
        execute: function() {
            PageTitleService = (function () {
                function PageTitleService() {
                }
                PageTitleService.prototype.getTitle = function () {
                    return this.pageTitle;
                };
                PageTitleService.prototype.setTitle = function (title) {
                    this.pageTitle = title;
                };
                PageTitleService = __decorate([
                    ng_forward_1.Injectable(),
                    ng_forward_1.Inject(), 
                    __metadata('design:paramtypes', [])
                ], PageTitleService);
                return PageTitleService;
            })();
            exports_1("PageTitleService", PageTitleService);
            exports_1("PAGE_TITLE_SERVICE_BINDINGS", PAGE_TITLE_SERVICE_BINDINGS = [
                PageTitleService,
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS10aXRsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhZ2UtdGl0bGUudHMiXSwibmFtZXMiOlsiUGFnZVRpdGxlU2VydmljZSIsIlBhZ2VUaXRsZVNlcnZpY2UuY29uc3RydWN0b3IiLCJQYWdlVGl0bGVTZXJ2aWNlLmdldFRpdGxlIiwiUGFnZVRpdGxlU2VydmljZS5zZXRUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7MEJBeUJhLDJCQUEyQjs7Ozs7OztZQWhCeEM7Z0JBS0VBO2dCQUFlQyxDQUFDQTtnQkFFaEJELG1DQUFRQSxHQUFSQTtvQkFDQUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFFREYsbUNBQVFBLEdBQVJBLFVBQVNBLEtBQVlBO29CQUNwQkcsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkFiRkg7b0JBQUNBLHVCQUFVQSxFQUFFQTtvQkFDWkEsbUJBQU1BLEVBQUVBOztxQ0FhUkE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQUFDQSxBQWRELElBY0M7WUFkRCwrQ0FjQyxDQUFBO1lBRVkseUNBQUEsMkJBQTJCLEdBQUc7Z0JBQ3pDLGdCQUFnQjthQUNqQixDQUFBLENBQUMifQ==