System.register(['ng-forward', './connect.html!text', './connect.css!'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var ng_forward_1, connect_html_text_1, connect_css_1;
    var Connect;
    return {
        setters:[
            function (ng_forward_1_1) {
                ng_forward_1 = ng_forward_1_1;
            },
            function (connect_html_text_1_1) {
                connect_html_text_1 = connect_html_text_1_1;
            },
            function (connect_css_1_1) {
                connect_css_1 = connect_css_1_1;
            }],
        execute: function() {
            Connect = (function () {
                function Connect($log) {
                    this.$log = $log;
                    this.title = 'Connect';
                    this.resolve();
                }
                Connect.prototype.resolve = function () {
                    this.$log.log(this.title + " component");
                };
                Connect = __decorate([
                    ng_forward_1.Component({
                        selector: 'connect',
                        directives: [],
                        bindings: [connect_css_1.default],
                        controllerAs: 'vm',
                        styles: [],
                        template: connect_html_text_1.default
                    }),
                    ng_forward_1.Inject('$log'), 
                    __metadata('design:paramtypes', [Object])
                ], Connect);
                return Connect;
            })();
            exports_1("default", Connect);
            ;
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbm5lY3QudHMiXSwibmFtZXMiOlsiQ29ubmVjdCIsIkNvbm5lY3QuY29uc3RydWN0b3IiLCJDb25uZWN0LnJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQWFFQSxpQkFBbUJBLElBQUlBO29CQUFKQyxTQUFJQSxHQUFKQSxJQUFJQSxDQUFBQTtvQkFDckJBLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLFNBQVNBLENBQUNBO29CQUV2QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsRUFBRUEsQ0FBQ0E7Z0JBQ2pCQSxDQUFDQTtnQkFLREQseUJBQU9BLEdBQVBBO29CQUNFRSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFJQSxJQUFJQSxDQUFDQSxLQUFLQSxlQUFZQSxDQUFDQSxDQUFDQTtnQkFDM0NBLENBQUNBO2dCQXhCSEY7b0JBQUNBLHNCQUFTQSxDQUFDQTt3QkFDVEEsUUFBUUEsRUFBRUEsU0FBU0E7d0JBQ25CQSxVQUFVQSxFQUFFQSxFQUFFQTt3QkFFZEEsUUFBUUEsRUFBRUEsQ0FBQ0EscUJBQU1BLENBQUNBO3dCQUNsQkEsWUFBWUEsRUFBRUEsSUFBSUE7d0JBRWxCQSxNQUFNQSxFQUFFQSxFQUFFQTt3QkFDVkEsUUFBUUEsRUFBRUEsMkJBQVFBO3FCQUNuQkEsQ0FBQ0E7b0JBQ0RBLG1CQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTs7NEJBZWRBO2dCQUFEQSxjQUFDQTtZQUFEQSxDQUFDQSxBQXpCRCxJQXlCQztZQXpCRCw2QkF5QkMsQ0FBQTtZQUFBLENBQUMifQ==