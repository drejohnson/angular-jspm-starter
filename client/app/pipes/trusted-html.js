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
    var TrustedHtml;
    function isString(url) {
        return typeof url === 'string';
    }
    exports_1("isString", isString);
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            }],
        execute: function() {
            TrustedHtml = (function () {
                function TrustedHtml($sce) {
                    this.$sce = $sce;
                }
                TrustedHtml.prototype.supports = function (url) {
                    return isString(url);
                };
                TrustedHtml.prototype.transform = function (url) {
                    var _this = this;
                    return function (url) { return _this.$sce.trustAsResourceUrl(url); };
                };
                TrustedHtml = __decorate([
                    ng_forward_1.Pipe({
                        name: 'trusted'
                    }), 
                    __metadata('design:paramtypes', [Object])
                ], TrustedHtml);
                return TrustedHtml;
            })();
            exports_1("TrustedHtml", TrustedHtml);
        }
    }
});
//# sourceMappingURL=trusted-html.js.map