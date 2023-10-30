import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesDetailComponent } from './berries-detail.component';

describe('BerriesDetailComponent', () => {
  let component: BerriesDetailComponent;
  let fixture: ComponentFixture<BerriesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BerriesDetailComponent]
    });
    fixture = TestBed.createComponent(BerriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
