let orderSpan = document.querySelector('#orderId');
let orderId = JSON.parse(localStorage.getItem('orderId'));

// Affichage de l'orderId dans span + suppression du LS

function displayId() {
	orderSpan.innerText = orderId;
	localStorage.clear();
}
displayId();
