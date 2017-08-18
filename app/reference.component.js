System.register(['@angular/core', '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1;
    var ReferencesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            ReferencesComponent = (function () {
                function ReferencesComponent(router) {
                    this.router = router;
                    this.title = 'References';
                    this.description = '';
                    this.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non interdum nulla. Aliquam faucibus ante sed orci dapibus, non venenatis ipsum bibendum. Vivamus vel massa ac odio dignissim tincidunt eget consectetur magna. Ut condimentum odio nec mi egestas, a congue ligula auctor. Aliquam et risus fringilla, volutpat felis ultrices, tristique arcu. Sed eget libero sagittis leo finibus molestie. Duis tempus est leo, malesuada aliquam dui interdum id. Sed tincidunt eget leo id blandit. Proin volutpat arcu ut quam mattis posuere. Phasellus pulvinar lectus turpis, ut tincidunt odio rutrum sed. Nullam nec lorem lorem. Sed ut tellus sed augue maximus dictum. Morbi vitae efficitur orci. Fusce sollicitudin massa velit. Proin euismod maximus risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer blandit ornare tincidunt. Donec non est tristique, volutpat massa ac, mattis leo. Nulla luctus, velit ut posuere ultrices, sem tortor vehicula nisi, quis congue urna augue eu elit. Vestibulum facilisis, erat nec ornare vestibulum, ligula urna fermentum eros, ut egestas arcu est et nulla. Aliquam volutpat vulputate porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
                }
                ReferencesComponent.prototype.ngOnInit = function () {
                };
                ReferencesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-references',
                        templateUrl: 'html/references.component.html',
                        styleUrls: ['css/references.component.css',
                            'css/app.component.css']
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_deprecated_1.Router !== 'undefined' && router_deprecated_1.Router) === 'function' && _a) || Object])
                ], ReferencesComponent);
                return ReferencesComponent;
                var _a;
            }());
            exports_1("ReferencesComponent", ReferencesComponent);
        }
    }
});
//# sourceMappingURL=reference.component.js.map