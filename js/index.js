function calcularDescuento() {
    let producto1 = parseInt (document.getElementById("producto1").value)
    let producto2 = parseInt (document.getElementById("producto2").value)
    let producto3 = parseInt(document.getElementById("producto3").value)
    let producto4 = parseInt(document.getElementById("producto4").value)
    let producto5 = parseInt(document.getElementById("producto5").value)
    
     while (true)
 {
     if (!producto1)
     {

        warning("Campo vacío o ingrese solamente números");


     }
     else if (!producto2)
     {

        warning ("Campo vacío o ingrese solamente números");

     }
     else if (!producto3)
     {
         warning ("Campo vacío o ingrese solamente números");
         
     }
     else if (!producto4)
     {
         warning ("Campo vacío o ingrese solamente números");
         
     }
    else if (!producto5)
     {
         warning ("Campo vacío o ingrese solamente números");
         
     }
     else
     {
         break;
     }
     return;
    } 
    
    let subtotal = producto1 + producto2 + producto3 + producto4 + producto5;
        document.getElementById('subtotal').value = 'L ' + subtotal.toFixed(2);
    
  
    let descuento = 0;
        let mostrarDescuento = 'Descuento 0%';

        if (subtotal >= 13000) {
            descuento = 0.40;
            mostrarDescuento = 'Descuento 40%';
        } else if (subtotal >= 9000) {
            descuento = 0.30;
            mostrarDescuento = 'Descuento 30%';
        } else if (subtotal >= 5000) {
            descuento = 0.20;
            mostrarDescuento = 'Descuento 20%';
        } else if (subtotal >= 1000) {
            descuento = 0.10;
            mostrarDescuento = 'Descuento 10%';
        }
    
    let cantidadDescuento = subtotal * descuento;
    let total = subtotal - cantidadDescuento;

        document.getElementById('mostrarDescuento').textContent = mostrarDescuento;
        document.getElementById('mostrarDescuento').value = 'L ' + cantidadDescuento.toFixed(2);
        document.getElementById('total').value = 'L ' + total.toFixed(2);
    
}

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: mensaje
    });
}

function limpiar() {
    document.getElementById("producto1").value = ""
    document.getElementById("producto2").value = ""
    document.getElementById("producto3").value = ""
    document.getElementById("producto4").value = ""
    document.getElementById("producto5").value = ""
    document.getElementById("subtotal").value = ""
    document.getElementById("total").value = ""
    document.getElementById('mostrarDescuento').textContent = "Descuento 0%";
}