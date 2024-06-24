function changeQuantity(change) {
    var quantityInput = document.getElementById('quantity');
    var currentQuantity = parseInt(quantityInput.value);
    currentQuantity += change;
    if(currentQuantity < 1) currentQuantity = 1;
    quantityInput.value = currentQuantity;
}

document.getElementById('orderForm').onsubmit = function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var data = {};
    formData.forEach(function(value, key){
        data[key] = value;
    });
    console.log(data); // Aquí enviarías 'data' a tu base de datos
    // Aquí agregarías el código para enviar los datos al servidor
};