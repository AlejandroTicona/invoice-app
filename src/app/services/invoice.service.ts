import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
//aqui se tendran solo implementaciones y consultas a A.P.I.s 
//http, el service es para eso, para trabajar con servicios rest y apis
export class InvoiceService {


  //obteniendo datos de manera hardcodeada, o directamente del codigo
  private invoice: Invoice = invoiceData;


  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return { ... this.invoice, total };
  }

  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return { ... this.invoice, total };
  }

  save(item: Item): Invoice{
    this.invoice.items = [... this.invoice.items, item];
    const total = this.calculateTotal();
    return {...this.invoice,total};
  }

  calculateTotal() {
    let total = 0;
    this.invoice.items.forEach(item => {
      total += (item.price * item.quantity);
    });
    return total;
    //reduce es un operador que reduce flujo
    // return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity),0);
  }
}
