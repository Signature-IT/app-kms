import {
    Component,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    OnInit
} from '@angular/core';
import { MobileLinksDTO, MainHeaderNavbarMobileSideComponentGeneric, LanguageService, EventBusService } from '@signature-it/ngx-generic';
@Component({
    selector: 'main-header-navbar-mobile-side',
    templateUrl: './navbar-mobile-side.html',
    styleUrls: ['./navbar-mobile-side.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainHeaderNavbarMobileSideComponent extends MainHeaderNavbarMobileSideComponentGeneric implements OnInit {

    @ViewChild('sidenav', {static: true}) sidenav: any;
    @Input() data: MobileLinksDTO[];
    @Output() toggle = new EventEmitter();

	constructor(langSvc: LanguageService,
				protected eventBusService: EventBusService) {
		super(langSvc, eventBusService);
    }


    ngOnInit() {
        super.ngOnInit();
    }

}
