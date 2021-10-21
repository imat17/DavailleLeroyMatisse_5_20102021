let items = document.querySelector('#cart__items');
let total = document.querySelector('#totalPrice');
let product = JSON.parse(localStorage.getItem('product'));
let productArr = [];


function displayBasket() {
    

    // Répartition des données
    //On itére sur un tableau vide de base qui se rempli avec le html pour chaque produit.
    for (let i = 0; i < product.length; i++) {
    items.innerHTML = productArr = productArr + `
        <article class="cart__item" data-id="${product[i].chosenId}">
            <div class="cart__item__img">
                <img src="${product[i].chosenImg}" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__titlePrice">
                    <h2>${product[i].chosenName}</h2>
                    <p>${product[i].chosenPrice * product[i].chosenQty + ' € '}</p>
                </div>
            <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product[i].chosenQty}">
                </div>
                <div class="cart__item__content__settings__delete">
                    <p class="deleteItem">Supprimer</p>
                </div>
            </div>
        </div>
        </article> `
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

        total.innerHTML =  new Intl.NumberFormat('fr-FR', {
            style: 'currency',
            currency: 'EUR',
        }).format(totalPrice);
    }
}
totalPriceMath();