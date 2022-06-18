import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilmsComponent } from './list-films.component';
import {AppComponent} from "../../app.component";

describe('ListFilmsComponent', () => {
  let component: ListFilmsComponent;
  let fixture: ComponentFixture<ListFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Films');
  });
});
