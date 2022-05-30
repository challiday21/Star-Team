import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListFilmsComponent } from './page-list-films.component';

describe('PageListFilmsComponent', () => {
  let component: PageListFilmsComponent;
  let fixture: ComponentFixture<PageListFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
