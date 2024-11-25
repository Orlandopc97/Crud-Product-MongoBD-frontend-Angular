import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productURL=environment.apiResrURL+'/product';

  constructor(private httpClient: HttpClient) {

  }

  // metodo para obtener todos los productos
  public list(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.productURL);
  }

  // metodo para obtener un producto
  public detail(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.productURL + `/${id}`);
  }

  //metodo para crear un producto   //no obtiene nada
  public create(product: Product): Observable<any>{ //crea un producto y lo envia a bd
    return this.httpClient.post<any>(this.productURL, product);
                                                    //del @RequestBody que trae un producto por el metodo post
  }
                                      //como devuelve un messagedto por eso el observable es de tipo any
  public update(id: number, product: Product): Observable<any>{
    return this.httpClient.put<any>(this.productURL + `/${id}`, product);
  }                                  //con esta url + el id del path variable para identificar el producto y el remplazo del producto el nombre y precio

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.productURL + `/${id}`);
  }                         // se utiliza el verbo con el que se hace la funcion

}
