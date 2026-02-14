import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPicture } from './media-picture';

describe('MediaPicture', () => {
  let component: MediaPicture;
  let fixture: ComponentFixture<MediaPicture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaPicture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaPicture);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
