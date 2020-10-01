import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedContactosComponent } from './red-contactos.component';

describe('RedContactosComponent', () => {
  let component: RedContactosComponent;
  let fixture: ComponentFixture<RedContactosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedContactosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
