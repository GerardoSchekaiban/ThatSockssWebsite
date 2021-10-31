function alert(){
    const buyButtons = document.querySelectorAll('.buy');
    buyButtons.forEach(buyButton =>{
        buyButton.addEventListener("click", () => {
            Swal.fire({
                title: "Lo sentimos",
                text: "Esta es una página informativa. Ninguno de los productos mostrados esta en venta",
                icon: "warning",
                iconColor: "#000",
                confirmButtonColor: "#000"
            });
        })
    })
    
}

alert();


