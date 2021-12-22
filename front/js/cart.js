let storage = window.localStorage;
let items = document.querySelector('#cart__items');
let total = document.querySelector('#totalPrice');
let product = JSON.parse(localStorage.getItem('product'));
let productArr = [];
// console.log(orderId);
// console.log(product);

function displayBasket() {
	// Répartition des données
	//On itére sur un tableau vide de base qui se rempli avec le html pour chaque produit.
	for (let i = 0; i < product.length; i++) {
		items.innerHTML = productArr =
			productArr +
			`
        <article class="cart__item" data-id="${product[i].chosenId}">
            <div class="cart__item__img">
                <img src="${product[i].chosenImg}" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__titlePrice">
                    <h2>${product[i].chosenName}</h2>
					<p>${product[i].chosenColor}</p>
                    <p>${product[i].chosenPrice * product[i].chosenQty + ' € '}</p>
                </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${
											product[i].chosenQty
										}">
                </div>
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
            </div>
        </div>
        </article> `;
	}
}
displayBasket();

// Calcul du prix total du panier

let totalPriceArr = [];

function totalPriceMath() {
	for (let j = 0; j < product.length; j++) {
		cartTotalPrice = product[j].chosenPrice * product[j].chosenQty;
		// Mettre les prix dans la le tableau totalPriceArr
		totalPriceArr.push(cartTotalPrice);

		// Additionner les prix du tableau totalPrice avec méthode reduce
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		const totalPrice = totalPriceArr.reduce(reducer);

		total.innerHTML = new Intl.NumberFormat('fr-FR', {
			style: 'currency',
			currency: 'EUR',
		}).format(totalPrice);
	}
}
totalPriceMath();

// Suppression au clic

function removeBasket() {
	let suppr = document.querySelectorAll('.deleteItem');
	for (let i = 0; i < suppr.length; i++) {
		suppr[i].addEventListener('click', (e) => {
			e.preventDefault();

			// Selection de l'objet à supprimer
			let supprId = product[i].chosenId;
			let supprColor = product[i].chosenColor;

			// Je garde tout les elements différents
			product = product.filter(
				(element) => element.chosenId !== supprId || element.chosenColor !== supprColor
			);
			localStorage.setItem('product', JSON.stringify(product));
			location.reload();
		});
	}
}
removeBasket();

// Gestion des quantitées via input
function changeQty() {
	let inputQty = document.querySelectorAll('.itemQuantity');

	for (let i = 0; i < inputQty.length; i++) {
		inputQty[i].addEventListener('change', (e) => {
			e.preventDefault();

			let qtyChange = product[i].chosenQty;
			let qtyVal = inputQty[i].value;

			const qtyFind = product.find((element) => element.qtyVal !== qtyChange);

			qtyFind.chosenQty = qtyVal;
			product[i].chosenQty = qtyFind.chosenQty;

			localStorage.setItem('product', JSON.stringify(product));

			location.reload();
		});
	}
}
changeQty();

// ----------------- Formulaire ------------------

let form = document.querySelector('.cart__order__form');

//----------------Prénom------------------------

// Ecouter la modification
form.firstName.addEventListener('change', function () {
	validFirstName(this);
});

const validFirstName = function (inputFirstName) {
	let regExpFirstName = new RegExp('^[a-zA-Z]+(([,.éèâ -][a-zA-Z ])?[a-zA-Z]*)*$');
	// récupération de la balise small
	let p = document.querySelector('#firstNameErrorMsg');

	// Test expression régulière
	if (regExpFirstName.test(inputFirstName.value) == true) {
		p.innerHTML = '';
		return true;
	} else {
		p.innerHTML = 'Prénom invalide';
		return false;
	}
};

//------------------Nom-------------------------

// Ecouter la modification
form.lastName.addEventListener('change', function () {
	validLastName(this);
});

const validLastName = function (inputLastName) {
	let regExpLastName = new RegExp('^[a-zA-Z]+(([,.éèâ -][a-zA-Z ])?[a-zA-Z]*)*$');
	// récupération de la balise small
	let p = document.querySelector('#lastNameErrorMsg');

	// Test expression régulière
	if (regExpLastName.test(inputLastName.value) == true) {
		p.innerHTML = '';
		return true;
	} else {
		p.innerHTML = 'Prénom invalide';
		return false;
	}
};

// --------------------Adresse----------------

// Ecouter la modification de l'adresse
form.address.addEventListener('change', function () {
	validAddress(this);
});

const validAddress = function (inputAddress) {
	let regExpAddress = new RegExp(`^[0-9]{1,3}(?:(?:[,.' ]){1}[-a-zA-Zàâäéèêëïîôöùûüç ]+)$`);

	//Récupération de la balise small
	let p = document.querySelector('#addressErrorMsg');

	// Test de l'expression régulière
	if (regExpAddress.test(inputAddress.value) == true) {
		p.innerHTML = '';
		return true;
	} else {
		p.innerHTML = 'Adresse invalide';
		return false;
	}
};

//--------------------Ville-------------------

// Ecouter la modification de la ville
form.city.addEventListener('change', function () {
	validCity(this);
});

const validCity = function (inputCity) {
	let regExpCity = new RegExp(`^[a-zA-Z]+(([',.éèâ -][a-zA-Z ])?[a-zA-Z]*)*$`);
	// récupération de la balise small
	let p = document.querySelector('#cityErrorMsg');

	// Test expression régulière
	if (regExpCity.test(inputCity.value) == true) {
		p.innerHTML = '';
		return true;
	} else {
		p.innerHTML = 'Ville invalide';
		return false;
	}
};

// ---------Email--------

// Ecouter la modification de l'email
form.email.addEventListener('change', function () {
	validEmail(this);
});

const validEmail = function (inputEmail) {
	let regExpMail = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
	// Récupération de la balise small
	let p = document.querySelector('#emailErrorMsg');

	// test de l'expression régulière
	if (regExpMail.test(inputEmail.value) == true) {
		p.innerHTML = '';
		return true;
	} else {
		p.innerHTML = 'E-mail invalide';
		return false;
	}
};

//--------------------Envoi des données au back-end-------------------------------

// Ecouter la soumission du formulaire
form.addEventListener('submit', function (e) {
	e.preventDefault();
	if (
		// Vérification des champs du formulaire
		validEmail(form.email) &&
		validAddress(form.address) &&
		validCity(form.city) &&
		validFirstName(form.firstName) &&
		validLastName(form.lastName)
	) {
		// Récupération des valeurs du formulaire
		const contact = {
			firstName: document.querySelector('#firstName').value,
			lastName: document.querySelector('#lastName').value,
			address: document.querySelector('#address').value,
			city: document.querySelector('#city').value,
			email: document.querySelector('#email').value,
		};
		// contact dans local storage en format JSON
		localStorage.setItem('contact', JSON.stringify(contact));
		// Stockage des id dans un tableau
		let products = [];
		for (inBasket of product) {
			products.push(inBasket.chosenId);
		}
		// contact + produits dans objet vers serveur
		const dataToBackEnd = {
			products,
			contact,
		};

		// Envoi vers le serveur
		const sendToBackend = fetch('http://localhost:3000/api/products/order', {
			method: 'POST',
			body: JSON.stringify(dataToBackEnd),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				localStorage.setItem('orderId', JSON.stringify(data.orderId));
				console.log(JSON.parse(localStorage.getItem('orderId')));

				document.location.href = `./confirmation.html?orderId=${data.orderId}`;
				console.log(data.orderId);
			})
			.catch((error) => {
				alert('Erreur' + error);
			});
	}
});
