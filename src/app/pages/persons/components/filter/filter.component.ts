import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

export interface IFilter {
  pagina: number;
  porPagina: number;
  nome?: string;
  sexo?: string;
  faixaIdadeInicial?: number;
  faixaIdadeFinal?: number;
}

@Component({
  selector: 'app-filter',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  @Input() form!: FormGroup;
  @Output() filterChange = new EventEmitter<void>();

  public filter(): void {
    this.filterChange.emit();
  }
}
