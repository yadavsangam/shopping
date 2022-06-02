import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchproductsComponent } from './fetchproducts.component';

describe('FetchproductsComponent', () => {
  let component: FetchproductsComponent;
  let fixture: ComponentFixture<FetchproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
