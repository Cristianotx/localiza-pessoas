import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IPerson } from '../../../../shared/interfaces/person.interface';

@Component({
  selector: 'app-card',
  imports: [RouterModule, DatePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() person!: IPerson;
}
