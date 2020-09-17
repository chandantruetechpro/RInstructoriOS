import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SearchheaderComponent } from './searchheader.component';
describe('SearchheaderComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchheaderComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SearchheaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=searchheader.component.spec.js.map