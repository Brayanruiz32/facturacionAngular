import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, ClientViewComponent, CompanyViewComponent, 
    ListItemsComponent, RowItemComponent, TotalComponent, FormItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {
  
  addItem(item: Item) {
     this.invoice = this.service.save(item);
     this.total = this.service.calculateTotal();
  }

  invoice!: Invoice;
  
  total!: number;
  
  constructor(private service: InvoiceService){}
  
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
    this.total = this.service.calculateTotal();
  }
  
  removeItem(id: number) {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    this.total = this.service.calculateTotal();
  }
}
