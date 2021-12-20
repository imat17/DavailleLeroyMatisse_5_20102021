let productImg = document.querySelector('.item__img');
let productName = document.querySelector('#title');
let productPrice = document.querySelector('#price');
let productDescription = document.querySelector('#description');
let productColors = document.querySelector('#colors');
let quantity = document.querySelector('#quantity');
let btn = document.querySelector('#addToCart');
let colorValue = document.querySelector('#colors');

// Récupération de l'ID du produit
let params = new URL(document.location).searchParams;
let id = params.get('id');
let newUrl = `http://localhost:3000/api/products/${id}`;

// Récupération des données du produit

const apiProduct = async () => {
	await fetch(newUrl)
		.then((response) => response.json())
		.then((data) => (productData = data));
	// console.log(productData);

	// Répartition des données du produit
	newImg = document.createElement('img');
	productImg.appendChild(newImg);
	newImg.src = productData.imageUrl;

	productName.innerText = productData.name;

	productPrice.innerText = productData.price;

	productDescription.innerText = productData.description;

	// Options couleurs + value
	for (let i = 0; i < productData.colors.length; i++) {
		newOption = document.createElement('option');
		productColors.appendChild(newOption);
		newOption.innerText = productData.colors[i];
		newOption.setAttribute('value', productData.colors[i]);
	}

	// Ajout dans le Local Storage

	function toLocalStorage() {
		btn.addEventListener('click', (e) => {
			e.preventDefault();

			let productChosen = {
				chosenName: productData.name,
				chosenDescription: productData.description,
				chosenImg: productData.imageUrl,
				chosenAlt: productData.altTxt,
				chosenPrice: productData.price,
				chosenId: id,
				chosenQty: quantity.value,
				chosenColor: colorValue.value,
			};

			// Transformer JSON en objet JS
			let inLocalStorage = JSON.parse(localStorage.getItem('product'));
			console.log(inLocalStorage);
			console.log(id);
			// Si produits dans LS
			if (inLocalStorage) {
				const sameProduct = inLocalStorage.find(
					(element) => element.chosenId === id && element.chosenColor === colorValue.value
				);
				if (sameProduct != undefined) {
					let newQuantity = parseInt(productChosen.chosenQty) + parseInt(sameProduct.chosenQty);
					sameProduct.chosenQty = newQuantity;
					inLocalStorage.push(productChosen);
					localStorage.setItem('product', JSON.stringify(inLocalStorage));
				} else {
					inLocalStorage.push(productChosen);
					localStorage.setItem('product', JSON.stringify(inLocalStorage));
				}

				// Si pas de produits
			} else {
				inLocalStorage = [];
				inLocalStorage.push(productChosen);
				localStorage.setItem('product', JSON.stringify(inLocalStorage));
			}
		});
	}
	toLocalStorage();
};
apiProduct();
