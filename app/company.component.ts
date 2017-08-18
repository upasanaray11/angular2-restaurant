import {Component, OnInit}  from 'angular2/core';
import { Router }           from 'angular2/router';

@Component({
    selector: 'my-company',
    templateUrl: 'html/company.component.html',
    styleUrls: ['css/company.component.css', 
    'css/app.component.css']
})
export class CompanyComponent implements OnInit { 
    title = 'Company';
    description = 'Best company ever.';
    content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non interdum nulla. Aliquam faucibus ante sed orci dapibus, non venenatis ipsum bibendum. Vivamus vel massa ac odio dignissim tincidunt eget consectetur magna. Ut condimentum odio nec mi egestas, a congue ligula auctor. Aliquam et risus fringilla, volutpat felis ultrices, tristique arcu. Sed eget libero sagittis leo finibus molestie. Duis tempus est leo, malesuada aliquam dui interdum id. Sed tincidunt eget leo id blandit. Proin volutpat arcu ut quam mattis posuere. Phasellus pulvinar lectus turpis, ut tincidunt odio rutrum sed. Nullam nec lorem lorem. Sed ut tellus sed augue maximus dictum. Morbi vitae efficitur orci. Fusce sollicitudin massa velit. Proin euismod maximus risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer blandit ornare tincidunt. Donec non est tristique, volutpat massa ac, mattis leo. Nulla luctus, velit ut posuere ultrices, sem tortor vehicula nisi, quis congue urna augue eu elit. Vestibulum facilisis, erat nec ornare vestibulum, ligula urna fermentum eros, ut egestas arcu est et nulla. Aliquam volutpat vulputate porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';

    constructor(private router: Router) { }

    ngOnInit() {
    }
}