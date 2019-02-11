import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMediaComponent } from './ngx-media.component';

describe('NgxMediaComponent', () => {
  let component: NgxMediaComponent;
  let fixture: ComponentFixture<NgxMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
