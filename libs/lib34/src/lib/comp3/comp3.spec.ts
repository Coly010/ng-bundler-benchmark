import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comp3Component } from './comp3';

describe('Comp3Component', () => {
  let component: Comp3Component;
  let fixture: ComponentFixture<Comp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp3Component]
    }).compileComponents();

    fixture = TestBed.createComponent(Comp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
