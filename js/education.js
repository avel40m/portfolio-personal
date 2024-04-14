var education = document.querySelector("#education");

fetch("https://644578ceb80f57f581badc90.mockapi.io/curriculum")
    .then(response => response.json())
    .then(data => dataEducation(data))
    .catch(error => console.error(error));

const dataEducation = (data) => {
    const filteredEducation = data.filter(item => item.title === "education");
    filteredEducation.forEach(element => {
        education.innerHTML += `
        <div class="item izq">
            <h4>${element.name}</h4>
            <span class="casa">${element.job}</span>
            <span class="fecha">${element.date}</span>
            <p>${element.description}</p>
            <span class="herramientas">Herramientas: ${element.skills}</span>
            <div class="conectori">
              <div class="circuloi"></div>
            </div>
          </div>
        `
    });
}
