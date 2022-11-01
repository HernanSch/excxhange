import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonedasPageComponent } from './monedas-page.component';

describe('MonedasPageComponent', () => {
  let component: MonedasPageComponent;
  let fixture: ComponentFixture<MonedasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonedasPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonedasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
