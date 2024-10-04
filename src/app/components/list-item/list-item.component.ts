import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';
import { RowItemComponent } from '../row-item/row-item.component';

@Component({
  selector: 'list-item',
  standalone: true,
  imports: [RowItemComponent],
  templateUrl: './list-item.component.html'
})
export class ListItemComponent {
  @Input() items: Item[] = [];

  //4. aqui se recibe nuevamente el id, es basicamente el mismo metodo y el mismo atrib que esta en row
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
