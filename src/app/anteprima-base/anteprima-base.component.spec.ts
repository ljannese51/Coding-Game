import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteprimaBaseComponent } from './anteprima-base.component';

describe('AnteprimaBaseComponent', () => {
  let component: AnteprimaBaseComponent;
  let fixture: ComponentFixture<AnteprimaBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteprimaBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnteprimaBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
