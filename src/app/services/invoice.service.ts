import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';

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
    return this.invoice;
  }
}
