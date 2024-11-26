Arquitectura MVC (Modelo-Vista-Controlador)
 
  -Modelo: El modelo de datos representa los productos. Un producto puede tener propiedades como id, nombre, precio, cantidad, descripcion, etc. Este modelo es utilizado para manejar la 
  información de los productos, y se define en una clase de TypeScript (por ejemplo, Producto.ts).

  -Vista: La vista está conformada por los componentes de Angular que interactúan con el usuario. Los formularios de creación, actualización y eliminación de productos se presentan de      manera visual. Los datos se muestran en tablas o listas, y las acciones (como editar, eliminar o agregar) son accesibles a través de botones.
  
  -Controlador: En Angular, el controlador se implementa a través de servicios que gestionan las interacciones entre el frontend y el backend. Los servicios en Angular se encargan de       realizar las peticiones HTTP al servidor para crear, leer, actualizar o eliminar productos, y manejar las respuestas.

SweetAlert y Toast para Notificaciones
  Para mejorar la experiencia del usuario, se integran notificaciones visuales usando SweetAlert2 y Toast. Estas librerías permiten mostrar mensajes claros de éxito, error o advertencia.

Observables
  Observables se utilizan ampliamente en Angular para manejar las respuestas asincrónicas de las solicitudes HTTP. Los servicios de Angular devuelven observables, lo que permite           suscribirse a las respuestas del servidor y gestionar las actualizaciones de datos en la interfaz de usuario.

# CrudMongoFrontProduct

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
