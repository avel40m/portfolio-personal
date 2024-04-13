const url = "https://644578ceb80f57f581badc90.mockapi.io/projects";
var galleryPhotos = document.querySelector('.galeria');

fetch(url)
    .then(response => response.json())
    .then(data => dataPortfoleo(data))
    .catch(error => console.error(error));

const dataPortfoleo = (data) => {
    data.forEach(element => {
        galleryPhotos.innerHTML +=  `
        <a href="${element.url}" target="_blank" class="proyecto">
            <img src="${element.image}" alt="">
            <div class="overlay">
                <h3>${element.name}</h3>
                <p>${element.description}</p>
            </div>
        </a>`;
    })
}
