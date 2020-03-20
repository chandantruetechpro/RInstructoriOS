import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CheatsheetsPage } from './cheatsheets.page';

describe('CheatsheetsPage', () => {
  let component: CheatsheetsPage;
  let fixture: ComponentFixture<CheatsheetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheatsheetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CheatsheetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
