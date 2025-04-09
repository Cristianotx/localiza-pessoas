import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpPersonService } from '../../shared/services/http-person/http-person.service';
import { SpinnerComponent } from '../../core/layout/components/loading/spinner/spinner.component';
import { IStatistical } from '../../shared/interfaces/person.interface';

@Component({
  selector: 'app-home',
  imports: [SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  statistical = signal<IStatistical | null>(null);

  private httpPersonService: HttpPersonService = inject(HttpPersonService);

  ngOnInit(): void {
    this.getDados();
  }

  private getDados(): void {
    this.httpPersonService.getStatistical().subscribe({
      next: (res) => this.statistical.set(res),
      error: (err) => console.error('Erro ao buscar estatísticas:', err),
    });
  }
}
