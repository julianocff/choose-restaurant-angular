import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaRestauranteComponent } from './seleciona-restaurante.component';

describe('SelecionaRestauranteComponent', () => {
  let component: SelecionaRestauranteComponent;
  let fixture: ComponentFixture<SelecionaRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionaRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionaRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
