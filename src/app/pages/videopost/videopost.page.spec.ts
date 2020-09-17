import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideopostPage } from './videopost.page';

describe('VideopostPage', () => {
  let component: VideopostPage;
  let fixture: ComponentFixture<VideopostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideopostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideopostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
