import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteprimaModeratoComponent } from './anteprima-moderato.component';

describe('AnteprimaModeratoComponent', () => {
  let component: AnteprimaModeratoComponent;
  let fixture: ComponentFixture<AnteprimaModeratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnteprimaModeratoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnteprimaModeratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
