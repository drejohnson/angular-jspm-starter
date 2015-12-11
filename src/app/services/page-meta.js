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
    var PageMetaTagsService, PAGE_META_SERVICE_BINDINGS;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            }],
        execute: function() {
            PageMetaTagsService = (function () {
                function PageMetaTagsService() {
                }
                PageMetaTagsService.prototype.getMetaDescription = function () {
                    return this.metaDescription;
                };
                PageMetaTagsService.prototype.setMetaDescription = function (description) {
                    this.metaDescription = description;
                };
                PageMetaTagsService.prototype.getMetaImage = function () {
                    return this.metaImage;
                };
                PageMetaTagsService.prototype.setMetaImage = function (image) {
                    this.metaImage = image;
                };
                PageMetaTagsService = __decorate([
                    ng_forward_1.Injectable(),
                    ng_forward_1.Inject(), 
                    __metadata('design:paramtypes', [])
                ], PageMetaTagsService);
                return PageMetaTagsService;
            })();
            exports_1("PageMetaTagsService", PageMetaTagsService);
            exports_1("PAGE_META_SERVICE_BINDINGS", PAGE_META_SERVICE_BINDINGS = [
                PageMetaTagsService,
            ]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFnZS1tZXRhLnRzIl0sIm5hbWVzIjpbIlBhZ2VNZXRhVGFnc1NlcnZpY2UiLCJQYWdlTWV0YVRhZ3NTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiUGFnZU1ldGFUYWdzU2VydmljZS5nZXRNZXRhRGVzY3JpcHRpb24iLCJQYWdlTWV0YVRhZ3NTZXJ2aWNlLnNldE1ldGFEZXNjcmlwdGlvbiIsIlBhZ2VNZXRhVGFnc1NlcnZpY2UuZ2V0TWV0YUltYWdlIiwiUGFnZU1ldGFUYWdzU2VydmljZS5zZXRNZXRhSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzZCQXFDYSwwQkFBMEI7Ozs7Ozs7WUExQnZDO2dCQU1FQTtnQkFBZUMsQ0FBQ0E7Z0JBRWhCRCxnREFBa0JBLEdBQWxCQTtvQkFDQUUsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFFREYsZ0RBQWtCQSxHQUFsQkEsVUFBbUJBLFdBQWtCQTtvQkFDcENHLElBQUlBLENBQUNBLGVBQWVBLEdBQUdBLFdBQVdBLENBQUNBO2dCQUNwQ0EsQ0FBQ0E7Z0JBRUFILDBDQUFZQSxHQUFaQTtvQkFDQUksTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFFREosMENBQVlBLEdBQVpBLFVBQWFBLEtBQVlBO29CQUN4QkssSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBQ3hCQSxDQUFDQTtnQkF0QkZMO29CQUFDQSx1QkFBVUEsRUFBRUE7b0JBQ1pBLG1CQUFNQSxFQUFFQTs7d0NBdUJSQTtnQkFBREEsMEJBQUNBO1lBQURBLENBQUNBLEFBeEJELElBd0JDO1lBeEJELHFEQXdCQyxDQUFBO1lBRVksd0NBQUEsMEJBQTBCLEdBQUc7Z0JBQ3hDLG1CQUFtQjthQUNwQixDQUFBLENBQUMifQ==