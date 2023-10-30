import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesListComponent } from './berries-list.component';

describe('BerriesListComponent', () => {
  let component: BerriesListComponent;
  let fixture: ComponentFixture<BerriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerriesListComponent]
    });
    fixture = TestBed.createComponent(BerriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
