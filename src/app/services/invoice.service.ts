import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;
  
  constructor() {
  }

  save(item: Item): Invoice{
    this.invoice.items = [... this.invoice.items, item];
    return this.invoice;
  }

  getInvoice(): Invoice{
    return this.invoice;
  }

  calculateTotal(){
    let total = 0;
    this.invoice.items.forEach(element => {
      total = total + (element.price * element.quantity)
    });

    return total;

  }
}
