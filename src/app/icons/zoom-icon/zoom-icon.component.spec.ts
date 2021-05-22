import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomIconComponent } from './zoom-icon.component';

describe('ZoomIconComponent', () => {
  let component: ZoomIconComponent;
  let fixture: ComponentFixture<ZoomIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
