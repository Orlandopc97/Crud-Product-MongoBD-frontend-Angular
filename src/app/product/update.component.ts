import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  id!: number;
  product!: Product;
              //Son propiedades para el constructor
  constructor(private productService: ProductService, private toast: ToastrService, private router: Router, private activateRoute: ActivatedRoute){
  }

  ngOnInit(): void{
    this.getProduct();

  }
  onUpdate(): void{
    this.productService.update(this.id, this.product).subscribe(
      data=>{this.toast.success(data.message, 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
      this.router.navigate(['']);},
      err=>{this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});}
    );
  }
  getProduct(): void{
    this.id = this.activateRoute.snapshot.params['id'];
    this.productService.detail(this.id).subscribe( // lo obtiene del detail directamente

      data=>{this.product = data;},
      err=>{this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});
    this.router.navigate(['']);}
    );
  }
}
