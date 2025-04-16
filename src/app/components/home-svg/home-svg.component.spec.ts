import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSvgComponent } from './home-svg.component';

describe('HomeSvgComponent', () => {
  let component: HomeSvgComponent;
  let fixture: ComponentFixture<HomeSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
