import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  @Input() carrello;
  @Output() aggiornaCarrello = new EventEmitter();
  
  constructor() { }
  totale = 0;
  sum(){
   _.each(this.carrello, (product) => {
     this.totale = this.totale + product.purchasable_item.price;
   })
  }

  rimuoviDalCarrello(product){
    const carrello_aggiornato = _.without(this.carrello, product);
    this.aggiornaCarrello.emit(carrello_aggiornato);
  }

  ngDoCheck() {
    this.sum();
  }

  ngOnInit() {
  }

}
