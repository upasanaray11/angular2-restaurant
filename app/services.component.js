System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var ServicesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ServicesComponent = (function () {
                function ServicesComponent(router) {
                    this.router = router;
                    this.title = 'Services';
                    this.description = 'We offer many kind of services.';
                    this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non interdum nulla. Aliquam faucibus ante sed orci dapibus, non venenatis ipsum bibendum. Vivamus vel massa ac odio dignissim tincidunt eget consectetur magna. Ut condimentum odio nec mi egestas, a congue ligula auctor. Aliquam et risus fringilla, volutpat felis ultrices, tristique arcu. Sed eget libero sagittis leo finibus molestie. Duis tempus est leo, malesuada aliquam dui interdum id. Sed tincidunt eget leo id blandit. Proin volutpat arcu ut quam mattis posuere. Phasellus pulvinar lectus turpis, ut tincidunt odio rutrum sed. Nullam nec lorem lorem. Sed ut tellus sed augue maximus dictum. Morbi vitae efficitur orci. Fusce sollicitudin massa velit. Proin euismod maximus risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer blandit ornare tincidunt. Donec non est tristique, volutpat massa ac, mattis leo. Nulla luctus, velit ut posuere ultrices, sem tortor vehicula nisi, quis congue urna augue eu elit. Vestibulum facilisis, erat nec ornare vestibulum, ligula urna fermentum eros, ut egestas arcu est et nulla. Aliquam volutpat vulputate porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
                }
                ServicesComponent.prototype.ngOnInit = function () {
                };
                ServicesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-services',
                        templateUrl: 'html/services.component.html',
                        styleUrls: ['css/services.component.css', 'css/app.component.css'],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ServicesComponent);
                return ServicesComponent;
            }());
            exports_1("ServicesComponent", ServicesComponent);
        }
    }
});
//# sourceMappingURL=services.component.js.map