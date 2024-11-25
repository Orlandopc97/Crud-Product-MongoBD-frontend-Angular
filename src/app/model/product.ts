export class Product {
    //creamos las propiedades en las que recibira los datos
    // el constructor con todas las propiedades
    id!: number;
    name: string;
    price: number;

    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
        
    }
}
