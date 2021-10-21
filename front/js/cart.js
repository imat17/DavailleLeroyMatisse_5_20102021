let items = document.querySelector('#cart__items');
let productArr = [];

function displayBasket() {
    let product = JSON.parse(localStorage.getItem('product'));
    
    
    // Répartition des données
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





{/* <article class="cart__item" data-id="${product[i].chosenId}">
<div class="cart__item__img">
  <img src="${product[i].chosenImg}" alt="Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__titlePrice">
    <h2>${product[i].chosenName}</h2>
    <p>${product[i].chosenPrice * product[i].chosenQty + '€'}</p>
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
</article> */}



// newArticle = document.createElement('article');
//         newArticle.classList.add('cart__item');
//         newArticle.setAttribute('data-id', product[i].chosenId)

//         items.appendChild(newArticle);

//         // Image

//         newDivImg = document.createElement('div');
//         newDivImg.classList.add('cart__item__img');

//         newArticle.appendChild(newDivImg);

//         newImg = document.createElement('img');
//         newImg.src = product[i].chosenImg;
//         newImg.alt = product[i].chosenAlt;

//         newDivImg.appendChild(newImg);

//         // Prix + Nom

//         newDivContent = document.createElement('div');
//         newDivContent.classList.add('cart__item__content');

//         newPriceTitle = document.createElement('div');
//         newPriceTitle.classList.add('cart__item__content__titlePrice')
        
//         newName = document.createElement('h2');
//         newName.innerText = product[i].chosenName;
//         newPrice = document.createElement('p');
//         newPrice.innerText = product[i].chosenPrice * product[i].chosenQty + ' € ';

//         newPriceTitle.appendChild(newName);
//         newPriceTitle.appendChild(newPrice);


//         newArticle.appendChild(newDivContent);
//         newDivContent.appendChild(newPriceTitle)

//         // Quantité

//         newDivSetting = document.createElement('div');
//         newDivSetting.classList.add('cart__item__content__settings');

//         newQty = document.createElement('div');