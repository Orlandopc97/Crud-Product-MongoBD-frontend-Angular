import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../model/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

//lo de product service de la lista se implenta aqui
export class ListComponent implements OnInit{

  products: Product[] = [];

  constructor(private productService: ProductService, private toast: ToastrService){

  }

  //llama al metodo en este caso getproducts para iniciarlo
  ngOnInit(): void {

    this.getProducts();
  }

  getProducts(): void {
    this.productService.list().subscribe(
      data=>{this.products = data;},
      err=>{this.toast.error(err.error.message, 'Error', {timeOut: 3000, positionClass: 'toast-top-center'});}  
    );
  }

  onDelete(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You cannot undo',
      icon:'warning',
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel'
  }).then((result) => {
    if(result.value){
      this.productService.delete(id).subscribe(
        data => {
          this.toast.success(data.message, 'OK', { timeOut: 3000, positionClass: 'toast-top-center'});
          this.getProducts();

        }, err => {
          this.toast.error(err.error.message, 'Error ', {timeOut: 3000, positionClass: 'toast-top-center'});
        }
      );
      //console.log('Deleted product ' + id);
    }else if(result.dismiss === Swal.DismissReason.cancel){
      Swal.fire(
        'canceled',
        'prodcut not deleted',
        'error'
      );
    }
  });
  }
/*
  //crear la funcion del delete
  onDelete(id: number): void{
    Swal.fire({
      title: 'Are you sure?',
      text: 'You can not undo',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if(result.value){
        console.log('Deleted product ' + id);
      }else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.fire(
          'canceled',
          'product not deleted',
          'error'
        )
      }
    });
  }
*/
}
