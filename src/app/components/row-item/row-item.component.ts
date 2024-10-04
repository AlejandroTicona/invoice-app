import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'tr[row-item]',
  standalone: true,
  imports: [],
  templateUrl: './row-item.component.html',
})
export class RowItemComponent {
  @Input() item!: Item;

  //2. esta línea de código declara un evento llamado removeEventEmitter que 
  //emitirá valores numéricos y permitirá que el componente padre escuche 
  //y responda a este evento cuando ocurra en el componente hijo.
  @Output() removeEventEmitter: EventEmitter<number> = new EventEmitter();
  //2.1. Esta funcion recibe un id y lo emite al componente padre
  onRemove(id: number) {
    this.removeEventEmitter.emit(id);
  }
}
