let categoriaGral = "";
let categoriaFerret = "";
let categoriaCorr = "";
let herramientas = "";
let electricidad = "";
let tornillos = "";
let medioPago = "";
let cuotas = "";
let resultado = 0;
let precio = 0;
let cantidad = 0;
let recargo = 0;
const iva = 0.21;
const porcentajeDesc = 0.15;
const porcentajeRec3 = 0.10;
const porcentajeRec6 = 0.25;
let seguirComprando = false;

do {
    categoriaGral = prompt("¿Usted desea comprar en Ferretería o Corralón?\nSolo debe ingresar el número correspondiente\n1. Ferretería\n2. Corralón");
    switch (categoriaGral) {
        case "1":
            categoriaFerret = prompt("Elija una categoria:\nSolo debe ingresar el número correspondiente\n1.Herramientas\n2. Electricidad\n3. Tornillos ");
            switch (categoriaFerret) {
                case "1":
                    herramientas = prompt("¿Qué desea comprar?:\nSolo debe ingresar el número correspondiente\n1.Amoladora\n2. Lijadora\n3. Atornilladora ");
                    switch (herramientas) {
                        case "1":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 550000;
                            subtotal(cantidad, precio);
                            break;
                        case "2":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 465000;
                            subtotal(cantidad, precio);
                            break;
                        case "3":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 710000;
                            subtotal(cantidad, precio);
                            break;
                    }
                    break;
                case "2":
                    electricidad = prompt("¿Qué desea comprar?:\nSolo debe ingresar el número correspondiente\n1.Térmicas\n2. Disyuntores\n3. Diferenciales ");
                    switch (electricidad) {
                        case "1":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 5600;
                            subtotal(cantidad, precio);
                            break;
                        case "2":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 7800;
                            subtotal(cantidad, precio);
                            break;
                        case "3":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 15000;
                            subtotal(cantidad, precio);
                            break;
                    }
                    break;
                case "3":
                    tornillos = prompt("¿Qué desea comprar?:\nSolo debe ingresar el número correspondiente\n1.Clavos\n2. Tornillos\n3. Remaches ");
                    switch (tornillos) {
                        case "1":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 150;
                            subtotal(cantidad, precio);
                            break;
                        case "2":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 285;
                            subtotal(cantidad, precio);
                            break;
                        case "3":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 300;
                            subtotal(cantidad, precio);
                            break;
                    }
                    break;
            }
            break;
        case "2":
            categoriaCorr = prompt("Elija una categoria:\nSolo debe ingresar el número correspondiente\n1. Cemento\n2. Hierro\n3. Ladrillos ");
            switch (categoriaCorr) {
                case "1":
                    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas:"));
                    precio = 10000;
                    subtotal(cantidad, precio);
                    break;
                case "2":
                    hierro = prompt("¿Qué desea comprar?:\nSolo debe ingresar el número correspondiente\n1.Hierro\n2. Maya de hierro\n3. Alambre ");
                    switch (hierro) {
                        case "1":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 78000;
                            subtotal(cantidad, precio);
                            break;
                        case "2":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 56600;
                            subtotal(cantidad, precio);
                            break;
                        case "3":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 14500;
                            subtotal(cantidad, precio);
                            break;
                    }
                    break;
                case "3":
                    ladrillo = prompt("¿Qué desea comprar?:\nSolo debe ingresar el número correspondiente\n1.Ladrillo hueco\n2. Ladrillo de cemento\n3. Ladrillo de barro ");
                    switch (ladrillo) {
                        case "1":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 2400;
                            subtotal(cantidad, precio);
                            break;
                        case "2":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 7900;
                            subtotal(cantidad, precio);
                            break;
                        case "3":
                            cantidad = parseInt(prompt("Ingrese la cantidad:"));
                            precio = 1200;
                            subtotal(cantidad, precio);
                            break;
                    }
                    break;
            }
            break;
    };
    seguirComprando = confirm("¿Desea seguir comprando?");
} while (seguirComprando);

const total = precioTotal(resultado, iva);

medioPago = prompt("Seleccione el método de pago:\nSolo debe ingresar el número correspondiente\n1. Tarjeta débito\n2. Tarjeta crédito\n3. Tranferencia");
switch (medioPago) {
    case "1":
        alert("El total de la compra es "+ total);
        break;
    case "2":
        cuotas = prompt("Desea hacerlo en:\n1. 1 cuota\n2. 3 cuotas\n3. 6 cuotas");
        if ( cuotas == "1") {
            alert("Pagando con en 1 cuota no tiene recargo");
            alert("El total de la compra es $"+ total);
        } else if ( cuotas == "2") {
            alert("Pagando en 3 cuotas tiene el 10% de recargo");
            recargo = recargo3(total, porcentajeRec3);
            alert("El total de la compra es 3 cuotas de $"+recargo+" c/u");
        } else {
            alert("Pagando en 6 cuotas tiene el 25% de recargo");
            recargo = recargo6(total, porcentajeRec6);
            alert("El total de la compra es 6 cuotas de $"+recargo+" c/u");
        }
        break;
    case "3":
        alert("Pagando con transferencia tiene el 15% de descuento");
        descuento = descuento(total, porcentajeDesc);
        alert("El total de la compra es $"+descuento);
        break;
}

function subtotal (cantidad, precio) {
    resultado += cantidad * precio;
    console.log("Subtotal: "+resultado);
    return resultado;
}

function precioTotal (subtotal, iva) {
    resultado = subtotal + (subtotal * iva);
    console.log("Precio Total: "+resultado);
    return resultado;
}

function recargo3 (precioTotal, porcentajeRec3) {
    resultado = precioTotal + (precioTotal * porcentajeRec3);
    cuota = resultado / 3;
    console.log("Recargo 3 cuotas: "+resultado);
    return cuota;
}

function recargo6 (precioTotal, porcentajeRec6) {
    resultado = precioTotal + (precioTotal * porcentajeRec6);
    cuota = resultado / 6;
    console.log("Recargo 6 cuotas: "+resultado);
    return cuota;
}

function descuento (precioTotal, porcentajeDesc) {
    resultado = precioTotal - (precioTotal * porcentajeDesc);
    console.log("Descuento transferencia: "+resultado);
    return resultado;
}




    