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
    var Unsafe;
    function isString(val) {
        return typeof val === 'string';
    }
    exports_1("isString", isString);
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            }],
        execute: function() {
            Unsafe = (function () {
                function Unsafe($sce) {
                    this.$sce = $sce;
                }
                Unsafe.prototype.supports = function (val) {
                    return isString(val);
                };
                Unsafe.prototype.transform = function (val) {
                    var _this = this;
                    return function (val) { return _this.$sce.trustAsHtml(val); };
                };
                Unsafe = __decorate([
                    ng_forward_1.Pipe({
                        name: 'unsafe'
                    }),
                    ng_forward_1.Inject('$sce'), 
                    __metadata('design:paramtypes', [Object])
                ], Unsafe);
                return Unsafe;
            })();
            exports_1("Unsafe", Unsafe);
        }
    }
});
//# sourceMappingURL=unsafe-html.js.map