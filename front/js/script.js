let url = `http://localhost:3000/api/products`;
const productName = document.querySelector('.productName');
const productDescription = document.querySelector('.productDescription');

// Récupération des données API + Répartition sur page Index

const apiCall = async() => {
    await fetch(url)
    .then((response) => response.json())
    .then((data) => (apiData = data))
    console.log(apiData);

    for (i = 0; i < apiData.length; i++) {
        productName.innerText = apiData[i].name;
    }
};

apiCall();











