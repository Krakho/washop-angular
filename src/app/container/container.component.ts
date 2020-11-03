import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../ajax.service';
import * as _ from "lodash";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  products;
  filteredProducts;
  categories = [];
  cartItems = [];
  constructor(private ajaxService: AjaxService) { }

  printCategoryProducts(category){
    this.filteredProducts = this.filterProductsByCategory(category);
  }


   addToCart(product){
     this.cartItems.push(product)
    let array = this.cartItems;
    _.each(array, (p, i) => {
      p['index'] = i;
    });
  }

  refreshCart(cart){
    this.cartItems = cart;
  }

  getProducts() {
    this.ajaxService.get('products.json').subscribe(response => {
      this.products = response;
      _.each(response, (item => { 
        let cats = item.categories.split(',');
        _.each(cats, (c) => {
          if(_.indexOf(this.categories, c )=== -1){
            this.categories.push(c);
          }

        })
        /*if (_.indexOf(this.categories, item.categories) === -1) 
        { this.categories.push(item.categories) } */
      }))
    });
  }

  
  filterProductsByCategory(category){
   return _.filter(this.products, (product) => {
          return product.categories.includes(category);
    })
  }

  ngOnInit() {
    
    this.ajaxService.test();
    this.getProducts();
  }

}