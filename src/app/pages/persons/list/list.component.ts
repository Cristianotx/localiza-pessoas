import { IResponse } from '@/shared/interfaces/person.interface';
import { HttpPersonService } from '@/shared/services/http-person/http-person.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { FormControl, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FilterComponent, IFilter } from '../components/filter/filter.component';
import { CardComponent } from '../components/card/card.component';
import { SkeletonComponent } from '@/core/layout/components/loading/skeleton/skeleton.component';

@Component({
  selector: 'app-persons-list',
  imports: [PaginationComponent, RouterModule, FilterComponent, CardComponent, SkeletonComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class PersonsListComponent implements OnInit {
  loading = signal(true);
  missings = signal<IResponse | null>(null);

  private httpPersonService: HttpPersonService = inject(HttpPersonService);

  public totalPages: number = 0;

  public filterForm = new FormGroup({
    pagina: new FormControl(0),
    porPagina: new FormControl(10),
    nome: new FormControl(''),
    sexo: new FormControl(''),
    status: new FormControl(''),
    faixaIdadeInicial: new FormControl(0),
    faixaIdadeFinal: new FormControl(100),
  });

  ngOnInit(): void {
    this.getDados();
  }

  private getDados(): void {
    this.httpPersonService.getMissings(this.filterForm.value as IFilter).subscribe({
      next: (res) => {
        this.missings.set(res);
        this.loading.set(false);
        this.configurePagination();
      },
      error: (err) => console.error('Erro ao buscar desaparecidos:', err),
    });
  }

  private configurePagination(): void {
    this.totalPages = this.missings()!.totalPages;
  }

  public onPageChange(page: number): void {
    this.loading.set(true);
    this.filterForm.get('pagina')?.setValue(page);
    this.getDados();
  }

  public filter(): void {
    this.loading.set(true);
    this.filterForm.get('pagina')?.setValue(0);
    this.getDados();
  }
}
