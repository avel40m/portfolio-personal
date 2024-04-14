var experiences = document.querySelector("#experience");

fetch("https://644578ceb80f57f581badc90.mockapi.io/curriculum")
    .then(response => response.json())
    .then(data => dataExperience(data))
    .catch(error => console.error(error));

const dataExperience = (data) => {
    const filteredExperience = data.filter(item => item.title === "experience");
    filteredExperience.forEach(element => {
        experiences.innerHTML += `
        <div class="item der">
            <h4>${element.name}</h4>
            <span class="casa">${element.job}</span>
            <span class="fecha">${element.date}</span>
            <p>${element.description}</p>
            <span class="herramientas">Herramientas: ${element.skills}</span>
            <div class="conectord">
            <div class="circulod"></div>
            </div>
        </div>
        `
    });
}