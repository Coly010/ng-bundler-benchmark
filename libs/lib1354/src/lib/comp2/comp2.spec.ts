import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comp2Component } from './comp2';

describe('Comp2Component', () => {
  let component: Comp2Component;
  let fixture: ComponentFixture<Comp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp2Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
