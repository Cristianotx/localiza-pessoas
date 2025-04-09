import { IResponse } from '@/shared/interfaces/person.interface';
import { HttpPersonService } from '@/shared/services/http-person/http-person.service';
import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { PaginationComponent } from '../components/pagination/pagination.component';
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
  selector: 'app-missing',
  imports: [DatePipe, PaginationComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './missing.component.html',
  styleUrl: './missing.component.scss'
})
export class MissingComponent implements OnInit {
  loading = signal(true);
  missings = signal<IResponse | null>(null);

  private httpPersonService: HttpPersonService = inject(HttpPersonService);

  filterForm = new FormGroup({
    pagina: new FormControl(0),
    porPagina: new FormControl(6),
    nome: new FormControl(''),
    sexo: new FormControl(''),
    faixaIdadeInicial: new FormControl(0),
    faixaIdadeFinal: new FormControl(100)
  });

  public totalPages: number = 0;

  ngOnInit(): void {
    this.getDados();
  }

  private getDados(): void {
    this.httpPersonService.getMissings(this.filterForm.value as IFilter).subscribe({
      next: (res) => {
        this.missings.set(res)
        this.loading.set(false);
        this.configurePagination();
      },
      error: (err) => console.error('Erro ao buscar desaparecidos:', err)
    });
  }

  private configurePagination(): void {
    console.log('Total de páginas:', this.missings()!);
    this.totalPages = this.missings()!.totalPages;
  }


  public onPageChange(page: number): void {
    this.loading.set(true);
    this.filterForm.get('pagina')?.setValue(page);
    this.getDados();
  }

  public filter(): void {
    console.log('teste')
    console.log('Filtros aplicados:', this.filterForm.value);
    this.filterForm.get('pagina')?.setValue(0);

    this.loading.set(true);
    this.getDados();
  }
}
