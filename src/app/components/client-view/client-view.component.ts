import { Component, Input } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'client-view',
  standalone: true,
  imports: [],
  templateUrl: './client-view.component.html'
})
export class ClientViewComponent {


  @Input() name!: string;
  @Input() lastname!: string;
  @Input() address!: Address;

}
