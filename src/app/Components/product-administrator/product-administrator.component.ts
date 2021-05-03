import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product/product.service';

@Component({
  selector: 'app-product-administrator',
  templateUrl: './product-administrator.component.html',
  styleUrls: ['./product-administrator.component.css']
})
export class ProductAdministratorComponent implements OnInit {
  ListProducts:Product[];
  userFile;
  show:boolean;
  showIntAddProd:boolean;
  showIntUpdateProd:boolean;
  public message: string;
  public imagePath;
  imgURL: any;
  product:Product=new Product();
  
  id:number;
  constructor(public prodSerivce:ProductService,private router: Router,public fb: FormBuilder) { }
  
  get f() {
    return this.prodSerivce.formData.controls;
}
  ngOnInit(): void {

    this.prodSerivce.getAllProducts().subscribe(res=>{console.log(res);
      this.ListProducts=res});


    
    }
  infoForm(){
    this.prodSerivce.formData=this.fb.group({
      id:[''],
      titleProduct:[''],
      priceProduct:[''],
      descriptionProduct:[''],
      barcode :[''],
      buyingPriceProduct: [''],


    })
  }
  
    deleteProduct(id:number){
      this.prodSerivce.deleteProductById(id).subscribe(()=>this.prodSerivce.getAllProducts().subscribe(res=>{this.ListProducts=res}));
    }

    ViewProducts(){
      this.show=true;
      this.showIntAddProd=false;
      this.showIntUpdateProd=false;
    }
   
    AddProdShowDiv(){
      this.show=false;
      this.showIntAddProd=true;
      this.showIntUpdateProd=false;
    }
  
    addProduct(){
      this.prodSerivce.addProduct(this.product).subscribe(()=>this.prodSerivce.getAllProducts().subscribe(res=>{this.ListProducts=res}));
    }
  
    UpdateProductShowDiv(){
      this.showIntUpdateProd=true;
      this.showIntAddProd=false;
      this.show=false;
    }
   
  updateProduct(){
    this.prodSerivce.updateproduct(this.id,this.product);
    this.redirectTo();
  }


  redirectTo(){
    this.router.navigate(['/administrator/product'])
  }


  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Article ?')) {
    this.prodSerivce.deleteData(id)
      .subscribe(
        data => {
          console.log(data);  
        },
        error => console.log(error));
  }
  
  }

  addData() {
    const formData = new  FormData();
    const article = this.prodSerivce.formData.value;
    formData.append('article',JSON.stringify(article));
    formData.append('file',this.userFile);
    this.prodSerivce.createData(formData).subscribe( data => {
    
      this.router.navigate(['/administrator/product']); 
    });

  
  }

  // getData(){
  //   this.prodSerivce.getAll().subscribe(response =>{this.prodSerivce.listData = response;}
  //     );
  // }
  
  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
  
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
     
      
    }
    

  
    onSubmit(){
      console.log(this.prodSerivce.formData.value);
       this.addData();}




}