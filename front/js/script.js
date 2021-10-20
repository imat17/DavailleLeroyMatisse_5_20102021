let url = `http://localhost:3000/api/products`;
let section = document.querySelector('.items');
// const productName = document.querySelector('.productName');
// const productDescription = document.querySelector('.productDescription');
// const img = document.querySelector('article img')
// const card = document.querySelector('article');
// const link = document.querySelector('section a')



// Récupération des données API 

const apiCall = async() => {
    await fetch(url)
    .then((response) => response.json())
    .then((data) => (apiData = data))
    console.log(apiData);


    //  Répartition des données sur page Index

    apiData.forEach(element => {

        newLink = document.createElement('a');
        newArticle = document.createElement('article');

        newImg = document.createElement('img');
        newImg.src = element.imageUrl;
        newImg.alt = element.altTxt;

        newName = document.createElement('h3');
        newName.classList.add('productName')
        newName.innerText = element.name;

        newDescription = document.createElement('p');
        newDescription.classList.add('productDescription')
        newDescription.innerText = element.description;


        section.appendChild(newLink);
        newLink.appendChild(newArticle);
        newArticle.appendChild(newImg);
        newArticle.appendChild(newName);
        newArticle.appendChild(newDescription);
    });
};

apiCall();











