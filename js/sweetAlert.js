const boton = document.getElementById("sweetAlert");

boton.onclick = () => {
    Swal.fire({
        title: "¿Confirmar Compra?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
    }).then((result) => {
        if (result.isConfirmed){
            Swal.fire({
                title: "La compra fue realizada con éxito",
                icon: "success",
            })
        }
    })
}