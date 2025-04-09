import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsListComponent } from './list.component';

describe('MissingComponent', () => {
  let component: PersonsListComponent;
  let fixture: ComponentFixture<PersonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
