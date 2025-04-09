import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
})
export class PaginationComponent {
  @Input() currentPage:number = 0;
  @Input() totalPages:number = 1;

  @Output() pageChange = new EventEmitter<number>();

  public goToPage(page: number): void {
    if (page >= 0 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }
}
