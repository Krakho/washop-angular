import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import * as _ from "lodash";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() prodotti;
  @Output() aggiungiAlCarrello = new EventEmitter();

  constructor() { }

  scatenaAggiungiAlCarrello(prodotto){
    this.aggiungiAlCarrello.emit(prodotto);
  }

  ngOnInit() {
  }

}
