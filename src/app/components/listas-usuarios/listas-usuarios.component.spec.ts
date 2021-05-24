import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasUsuariosComponent } from './listas-usuarios.component';

describe('ListasUsuariosComponent', () => {
  let component: ListasUsuariosComponent;
  let fixture: ComponentFixture<ListasUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListasUsuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListasUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
