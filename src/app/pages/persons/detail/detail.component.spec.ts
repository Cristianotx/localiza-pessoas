import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsDetailComponent } from './detail.component';

describe('DetailComponent', () => {
  let component: PersonsDetailComponent;
  let fixture: ComponentFixture<PersonsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonsDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
