import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  //obteniendo datos de manera hardcodeada, o directamente del codigo
  private invoice: Invoice = invoiceData;


  constructor() { }

  getInvoice(): Invoice {
    return this.invoice;
  }
}
