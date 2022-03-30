class ProductoDom{
    
    constructor(obj){
 
        this.codigo = obj.codigo;
     
        this.nombre = obj.nombre;
     
        this.marca = obj.marca;
     
        this.precio = obj.precio;
    }
}

const almacenamientoDom = JSON.parse(localStorage.getItem("stock"));

const productosDom = [];

for (const objeto of almacenamientoDom){

    productosDom.push(new Producto(objeto));

}

for (const producto of productosDom){

    let contArticulo = document.getElementById("articulo");

    let articulo = document.createElement("div");

    articulo.innerHTML = `<h2>Producto ${producto.codigo}: ${producto.nombre} ${producto.marca} Precio: $${producto.precio}</h2>`;

    contArticulo.append(articulo);

}