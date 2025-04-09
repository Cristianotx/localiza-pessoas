import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FilterComponent, IFilter } from './filter.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('FilterComponent', () => {
  let fixture: ComponentFixture<FilterComponent>;
  let component: FilterComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;

    // Setup do form de entrada
    component.form = new FormGroup({
      pagina: new FormControl(0),
      porPagina: new FormControl(10),
      nome: new FormControl(''),
      sexo: new FormControl(''),
      status: new FormControl(''),
      faixaIdadeInicial: new FormControl(0),
      faixaIdadeFinal: new FormControl(100),
    });

    fixture.detectChanges(); // aplica as bindings do Angular
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filterChange when filter() is called', () => {
    jest.spyOn(component.filterChange, 'emit');
    component.filter();
    expect(component.filterChange.emit).toHaveBeenCalled();
  });
});
