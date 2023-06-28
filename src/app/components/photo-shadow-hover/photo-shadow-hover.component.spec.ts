import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoShadowHoverComponent } from './photo-shadow-hover.component';

describe('PhotoShadowHoverComponent', () => {
  let component: PhotoShadowHoverComponent;
  let fixture: ComponentFixture<PhotoShadowHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoShadowHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoShadowHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
