import { SpinnerComponent } from '@/core/layout/components/loading/spinner/spinner.component';
import { IPerson } from '@/shared/interfaces/person.interface';
import { HttpPersonService } from '@/shared/services/http-person/http-person.service';
import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-persns-detail',
  imports: [DatePipe, NgClass, RouterModule, SpinnerComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class PersonsDetailComponent {
  loading = signal(true);
  person = signal<IPerson | null>(null);

  private httpPersonService: HttpPersonService = inject(HttpPersonService);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.activatedRoute.params.pipe(map((p) => p['id'])).subscribe((id) => {
      if (id) {
        this.httpPersonService.getById(id).subscribe({
          next: (res) => {
            this.person.set(res)
            this.loading.set(false);
          },
          error: (err) => console.error('Erro ao buscar desaparecidos:', err)
        });
      }
    });
  }
}
