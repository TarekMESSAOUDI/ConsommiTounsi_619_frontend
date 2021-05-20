import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { BasketService } from 'src/app/Services/Basket/basket.service';
import { DatashareService } from 'src/app/Services/SharingData/datashare.service';
import { Product } from '../../Models/Product';
import { ProductService } from '../../Services/product/product.service';
import { SortedComponentComponent } from '../sorted-component/sorted-component.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  productsCart: any[] = [];
  errorMessage: string;
  selectedProduct: Product;
  ListProducts: Product[];
  user: User;
  productName: string;
  filteredProduct: Product[] = [];
  currentSorting: string;
  wrapper = true;
  @ViewChild('filtersComponent')
  filtersComponent: SortedComponentComponent;

  constructor(
    private prodClientServ: ProductService,
    private router: Router,
    private dataShare: DatashareService,
    private CartService: BasketService
  ) {}

  sortFilters: any[] = [
    { name: 'Name (A to Z)', value: 'name' },
    { name: 'Price (low to high)', value: 'priceAsc' },
    { name: 'Price (high to low)', value: 'priceDes' },
  ];
  priceFilters: any[] = [
    { name: 'All', value: 'all', checked: true },
    { name: 'Price > 2000', value: 'more_2000', checked: false },
    { name: 'Price < 500', value: 'less_500', checked: false },
  ];


  ngOnInit(): void {
    this.prodClientServ.getAllProducts().subscribe(
      (res) => {
        console.log(res);
        this.ListProducts = res;
        this.filteredProduct = res;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  // onFilterChange(data) {
  //   if (data.type === 'category') {
  //     if (data.isChecked) {
  //       // tslint:disable-next-line:prefer-for-of
  //       for (let i = 0; i < data.filter.Products.length; i++) {
  //         this.filteredProduct.push(data.filter.Products[i]);
  //       }
  //     } else {
  //       this.filteredProduct = this.ListProducts.filter((x) => {
  //         return (
  //           x.UnderCategory.idUnderCategory !== data.filter.idUnderCategory
  //         );
  //       });
  //     }
  //   } else if (data.type === 'price') {
  //     this.filteredProduct = this.ListProducts;
  //     if (data.isChecked) {
  //       const priceFilter = data.filter.value;
  //       if (priceFilter === 'all') {
  //         this.filteredProduct = this.ListProducts;
  //       } else if (priceFilter === 'more_2000') {
  //         this.filteredProduct = this.ListProducts.filter(
  //           (x) => x.buyingPriceProduct > 2000
  //         );
  //       } else if (priceFilter === 'less_500') {
  //         this.filteredProduct = this.ListProducts.filter(
  //           (x) => x.buyingPriceProduct < 500
  //         );
  //       }
  //     }
  //   }
  // }

  onSelect(product: Product): void {
    console.log(product, 'esta');
    this.selectedProduct = product;
    console.log(this.selectedProduct, 'estass');
    this.router.navigate([`/client/product/${product.idProduct}`, product]);
  }
  onAddToCart(product: Product): void {
    let prodId = product.idProduct;
    console.log(typeof prodId, prodId);
    // let basketId =1;
    // this.prodClientServ.addProdToBasket(basketId,prodId).subscribe(res=>{console.log(res);})
    console.log(product, 'product just added ');
    this.productsCart.push(product);
    console.log(this.productsCart.length, 'number of products added to cart');
    console.log('estaa', this.productsCart);
  }

  searchByName() {
    if (this.productName !== '') {
      this.ListProducts = this.ListProducts.filter((res) => {
        return res.titleProduct
          ?.toLocaleLowerCase()
          .match(this.productName?.toLocaleLowerCase());
      });
    } else if (this.productName == '') {
      this.ngOnInit();
    }

  }
   
  
    
  
    getAllProducts(): void {
      this.prodClientServ.lista().subscribe(
        data => {
          this.ListProducts = data;
        },
        err => {
          console.log(err);
        }
      );
    }
    
likeProduct(id:number,prod:Product){
  return this.prodClientServ.likeProduct(prod,id);
}


  //ADD TO CART SERVICE

  addToCArt(product: Product) {
    this.CartService.addToCart(product);
  }
}
