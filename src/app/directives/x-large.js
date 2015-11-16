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
    var LOG, ATTRS, ELEM, XLarge;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            }],
        execute: function() {
            LOG = new WeakMap();
            ATTRS = new WeakMap();
            ELEM = new WeakMap();
            XLarge = (function () {
                function XLarge($log, $attrs, $element) {
                    LOG.set(this, $log);
                    ELEM.set(this, $element);
                    ATTRS.set(this, $attrs);
                    LOG.get(this).log(ELEM.get(this));
                }
                XLarge = __decorate([
                    ng_forward_1.Directive({ selector: '[font-large]' }),
                    ng_forward_1.Inject('$log', '$attrs', '$element'), 
                    __metadata('design:paramtypes', [Object, Object, Object])
                ], XLarge);
                return XLarge;
            })();
            exports_1("default", XLarge);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1sYXJnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIngtbGFyZ2UudHMiXSwibmFtZXMiOlsiWExhcmdlIiwiWExhcmdlLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztRQUVNLEdBQUcsRUFDSCxLQUFLLEVBQ0wsSUFBSTs7Ozs7OztZQUZKLEdBQUcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3BCLEtBQUssR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3RCLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBTTNCO2dCQUdFQSxnQkFBWUEsSUFBSUEsRUFBRUEsTUFBTUEsRUFBRUEsUUFBUUE7b0JBQ2hDQyxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxJQUFJQSxDQUFDQSxDQUFDQTtvQkFDcEJBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLFFBQVFBLENBQUNBLENBQUNBO29CQUN6QkEsS0FBS0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsTUFBTUEsQ0FBQ0EsQ0FBQ0E7b0JBQ3hCQSxHQUFHQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDcENBLENBQUNBO2dCQVJIRDtvQkFBQ0Esc0JBQVNBLENBQUNBLEVBQUVBLFFBQVFBLEVBQUVBLGNBQWNBLEVBQUVBLENBQUNBO29CQUN2Q0EsbUJBQU1BLENBQUNBLE1BQU1BLEVBQUVBLFFBQVFBLEVBQUVBLFVBQVVBLENBQUNBOzsyQkFRcENBO2dCQUFEQSxhQUFDQTtZQUFEQSxDQUFDQSxBQVRELElBU0M7WUFURCw0QkFTQyxDQUFBIn0=