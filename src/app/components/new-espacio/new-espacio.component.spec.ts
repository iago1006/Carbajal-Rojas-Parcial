import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEspacioComponent } from './new-espacio.component';

describe('NewEspacioComponent', () => {
  let component: NewEspacioComponent;
  let fixture: ComponentFixture<NewEspacioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEspacioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEspacioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
