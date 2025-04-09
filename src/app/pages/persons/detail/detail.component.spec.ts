import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsDetailComponent } from './detail.component';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetailComponent', () => {
  let component: PersonsDetailComponent;
  let fixture: ComponentFixture<PersonsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonsDetailComponent],
      providers: [
        provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: (key: string) => '123' } },
            params: of({ id: '123' })
          }
        }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
