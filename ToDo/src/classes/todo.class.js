
export class Todo {

    constructor ( tarea ){
        
        this.tarea      = tarea;
        this.id         = new Date().getTime(); // we get an id
        this.completado  = false;
        this.creado     = new Date();
    }
   
}