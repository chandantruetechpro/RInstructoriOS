import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhichtestPage } from './whichtest.page';

describe('WhichtestPage', () => {
  let component: WhichtestPage;
  let fixture: ComponentFixture<WhichtestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhichtestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhichtestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
