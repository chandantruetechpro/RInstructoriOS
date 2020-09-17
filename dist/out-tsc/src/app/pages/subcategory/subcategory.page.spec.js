import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SubcategoryPage } from './subcategory.page';
describe('SubcategoryPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SubcategoryPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(SubcategoryPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=subcategory.page.spec.js.map