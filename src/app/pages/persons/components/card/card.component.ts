import { IPerson } from '@/shared/interfaces/person.interface';
import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule, DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() person!: IPerson;

}
