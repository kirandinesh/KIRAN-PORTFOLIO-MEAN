import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinitScrollComponent } from './infinit-scroll.component';

describe('InfinitScrollComponent', () => {
  let component: InfinitScrollComponent;
  let fixture: ComponentFixture<InfinitScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfinitScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfinitScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
