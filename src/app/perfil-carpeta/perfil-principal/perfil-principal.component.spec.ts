import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPrincipalComponent } from './perfil-principal.component';

describe('PerfilPrincipalComponent', () => {
  let component: PerfilPrincipalComponent;
  let fixture: ComponentFixture<PerfilPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
