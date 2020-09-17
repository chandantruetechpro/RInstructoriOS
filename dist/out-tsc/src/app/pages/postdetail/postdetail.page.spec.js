import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { PostdetailPage } from './postdetail.page';
describe('PostdetailPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PostdetailPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(PostdetailPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=postdetail.page.spec.js.map