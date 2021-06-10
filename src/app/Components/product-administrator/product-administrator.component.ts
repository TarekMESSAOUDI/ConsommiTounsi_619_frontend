import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PopupService } from '@ng-bootstrap/ng-bootstrap/util/popup';
import { Observable } from 'rxjs';
import { BarcodeResponse } from 'src/app/Models/BarcodeResponse';
import { Department } from 'src/app/Models/Department';
import { Product } from 'src/app/Models/Product';
import { UnderCategory } from 'src/app/Models/UnderCategory';
import { DepartmentService } from 'src/app/Services/Department/department.service';
import { ProductService } from 'src/app/Services/product/product.service';
import { UndercategoryService } from 'src/app/Services/UnderCategory/undercategory.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>
        Your product has been added to the database. Thank
        you!
      </p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
})




export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-product-administrator',
  templateUrl: './product-administrator.component.html',
  styleUrls: ['./product-administrator.component.css'],
})
export class ProductAdministratorComponent implements OnInit {
  ListProducts: Product[];
  productToUpdate: any;
  userFile: null;
  show: boolean;
  updateProductInt: boolean;
  showIntAddProd: boolean;
  showIntUpdateProd: boolean;
  tunisianBarCode: boolean;
  tunisianBarCodeCheck: string;
  public message: string;
  public imagePath;
  imgURL: any;
  product: Product = new Product();
  response: BarcodeResponse;
  id: number;
  ReaderResult: any;
  file: File;
  file_upload: object;
  form: FormGroup;
  ListUnderCategory: UnderCategory[];
  ListDepartments: Department[];

  constructor(
    public prodSerivce: ProductService,
    private router: Router,
    public fb: FormBuilder,
    private DepService: DepartmentService,
    private underCatSer: UndercategoryService,
    private modalService: NgbModal
  ) {}

  get f() {
    console.log('get', this.prodSerivce.dataForm.controls);
    return this.prodSerivce.dataForm.controls;
  }
  ngOnInit(): void {
    this.prodSerivce.getAllProducts().subscribe((res) => {
      console.log(res);
      this.ListProducts = res;
    });
    this.createForm();

    this.underCatSer.getAllUnderCat().subscribe((res) => {
      console.log(res);
      this.ListUnderCategory = res;
    });

    this.DepService.getallDepartments().subscribe((res) => {
      console.log(res);
      this.ListDepartments = res;
    });
  }

  infoForm() {
    this.prodSerivce.dataForm = this.fb.group({
      id: [''],
      titleProduct: [''],
      priceProduct: [''],
      descriptionProduct: [''],
      barcode: [''],
      buyingPriceProduct: [''],
    });
  }

  deleteProduct(id: number) {
    this.prodSerivce.deleteProductById(id).subscribe(() =>
      this.prodSerivce.getAllProducts().subscribe((res) => {
        this.ListProducts = res;
      })
    );
  }

  ViewProducts() {
    this.show = true;
    this.showIntAddProd = false;
    this.showIntUpdateProd = false;
  }

  AddProdShowDiv() {
    this.show = false;
    this.showIntAddProd = true;
    this.showIntUpdateProd = false;
  }

  onChange(value) {
    this.product.UnderCategory = value;
  }

  onChange2(value) {
    this.product.Department = value;
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
  }

  addProduct() {
    var startIndex =
      this.product.fileName.indexOf('\\') >= 0
        ? this.product.fileName.lastIndexOf('\\')
        : this.product.fileName.lastIndexOf('/');
    var filename = this.product.fileName.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
    }
    this.product.fileName = filename;
    this.product.barcodeProduct = this.file_upload;
    console.log(this.product);

    var b = Number(this.product.UnderCategory);
    var b2 = Number(this.product.Department);

    this.prodSerivce.addProduct(this.product, b, b2).subscribe(() =>
      this.prodSerivce.getAllProducts().subscribe((res) => {
        this.ListProducts = res;
      })
    );
    this.open();
    window.setTimeout(this.reload, 3000);
  }

  reload() {
    window.location.reload();
  }

  UpdateProductShowDiv() {
    this.showIntUpdateProd = true;
    this.showIntAddProd = false;
    this.show = false;
  }

  updateProduct(id: number, product: Product) {
    console.log('product', product);
    console.log('ahawa', this.productToUpdate);
    var startIndex = this.productToUpdate.fileName.indexOf('\\') >= 0 ? this.productToUpdate.fileName.lastIndexOf('\\')
        : this.productToUpdate.fileName.lastIndexOf('/');
    var filename = this.productToUpdate.fileName.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
      filename = filename.substring(1);
      console.log('ahawa', this.productToUpdate);
    }
    this.productToUpdate.fileName = filename;
    this.prodSerivce.updateproduct(id, product).subscribe(() =>
      this.prodSerivce.getAllProducts().subscribe((res) => {
        this.ListProducts = res;
      })
    );
    this.updateProductInt = false;
    this.show = true;
  }

  updateProductInterface(id: number, product: Product) {
    this.updateProductInt = true;
    this.show = false;
    console.log(id, product);
    this.productToUpdate = product;
    console.log('hhh', this.productToUpdate);
  }

  redirectTo() {
    this.router.navigate(['/administrator/product']);
  }

  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Article ?')) {
      this.prodSerivce.deleteData(id).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => console.log(error)
      );
    }
  }

  addData() {
    const formData = new FormData();
    const article = this.prodSerivce.dataForm;
    console.log('art', article);
    formData.append('article', JSON.stringify(article));
    formData.append('file', this.userFile);
    console.log('fd', formData);
    this.prodSerivce.createData(formData).subscribe((data) => {
      this.router.navigate(['/administrator/product']);
    });
  }

  // getData(){
  //   this.prodSerivce.getAll().subscribe(response =>{this.prodSerivce.listData = response;}
  //     );
  // }

  onSelectFile(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      };
    }
  }

  createForm() {
    this.form = this.fb.group({
      file_upload: null,
    });
  }

  // Check for changes in files inputs via a DOMString reprsenting the name of an event
  fileChange(event: any) {
    // Instantiate an object to read the file content
    let reader = new FileReader();
    // when the load event is fired and the file not empty
    if (event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
    }
  }

  ReadBarcode() {
    // Instantiate a FormData to store form fields and encode the file
    let body = new FormData();
    // Add file content to prepare the request
    body.append('file', this.file);
    // Launch post request

    return this.prodSerivce.ZxingReader(body).subscribe((res) => {
      this.file_upload = res['results'][0].toString();
      console.log('image Complte', res);
      var arr = this.file_upload.toString().split('');
      this.tunisianBarCodeCheck = arr.slice(0, 3).join('');
      this.tunisianBarCodeCheck === '613'
        ? (this.tunisianBarCode = true)
        : (this.tunisianBarCode = false);
        

      if (this.tunisianBarCode === false) {
        alert('Your product is not tunisian !!!! \n Please insert a tunisian product');
      }
      console.log(this.file_upload);
    });
  }
}
