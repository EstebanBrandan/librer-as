class Producto{
    
    constructor(obj){
 
        this.codigo = obj.codigo;
     
        this.nombre = obj.nombre;
     
        this.marca = obj.marca;
     
        this.precio = obj.precio;
    }
}

const almacenamiento = JSON.parse(localStorage.getItem("stock"));

const productos2 = [];

for (const objeto of almacenamiento){

    productos2.push(new Producto(objeto));

}

function tipoProducto(nombre, numeroCuotas){

    if(nombre=="SMART TV"){
        
        switch (numeroCuotas) {

            case 1:

                return 0;
                
            case 3:

                return 0; 

            case 6:    
                
                return 5;
            
            case 12:
            
                return 10;
            
            case 18:
        
                return 15;
            
            case 24:
        
                return 25;
            
            default:
        
                return -1;
        
        }

    }else if(nombre=="CELULAR"){
        
        switch (numeroCuotas) {
            case 1:

                return 0;
                
            case 3:

                return 1;

            case 6:
                
                return 2;

            case 12:

                return 4;

            case 18:

                return 8;

            default:

                return -1;

        }

    }else{
        
        switch (numeroCuotas) {

            case 1:

                return 0;

            case 3:

                return 10;

            case 6:

                return 15;

            case 12:

                return 20;

            default:

                return -1;
            
        }

    }

}

function sumarInteres({nombre, marca, precio}, numeroCuotas){

    let interesTotal=tipoProducto(nombre, numeroCuotas);

    if (numeroCuotas!=1 && interesTotal!=-1){
        
        if(marca=="LG"){

            interesTotal+=5;

        }else if(marca=="SAMSUNG"){

            interesTotal+=7;

        }else if(marca=="APPLE"){

            interesTotal+=7;

        }
        
        if (precio>250000){    

            interesTotal+=10;

        }

    }

    return interesTotal;

}

function calcularInteres(numeroProducto, numeroCuotas){

    let producto = productos.find(objeto => objeto.codigo == numeroProducto);
    
    if(numeroProducto>=1 && numeroProducto<=10)

        return sumarInteres(producto, numeroCuotas);
    
    else

        return -2;

}

function calcularCuota(numeroProducto, numeroCuotas, interes){

    let contCuota = document.getElementById("precioCuota");
    
    let cuotaHtml = document.createElement("div");

    if (interes != -1 && interes != -2){

        let producto = productos.find(objeto => objeto.codigo == numeroProducto);

        let valorCuota = (producto.precio / numeroCuotas) + ((producto.precio * interes) / 100);        

        let precioFinal = valorCuota*numeroCuotas;

        valorCuota = Math.ceil(valorCuota);

        cuotaHtml.innerHTML = `<h3>El precio final con intereses del producto ${producto.nombre} ${producto.marca} es $${precioFinal} (el valor de la cuota es $${valorCuota}).</h3>`;
        
    } else if (interes == -1){

        cuotaHtml.innerHTML = "<h3>No esta disponible la cantidad de cuotas seleccionadas para este producto</h3>";
        
    } else {

        cuotaHtml.innerHTML = "<h3>El producto no esta disponible.</h3>";

    }
    contCuota.append(cuotaHtml);

}


let compra = document.getElementById("formulario");

compra.addEventListener("submit", confirmarCompra);

function confirmarCompra(e){
    
    e.preventDefault();
    
    let numeroProducto = parseInt(compra.children[0].value);

    let numeroCuotas = parseInt(compra.children[1].value);

    let interes = calcularInteres(numeroProducto, numeroCuotas);

    calcularCuota(numeroProducto, numeroCuotas, interes);
}