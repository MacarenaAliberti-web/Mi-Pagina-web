class Activity  {    
    constructor (id,title, description,imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    } 
}
                    
class Repository {  
    constructor() {
        this.activities = [];                         
    }


getAllActivities() {
    return this.activities;
}

createActivity(id, title, description, imgUrl) {
    const activity = new Activity(this.idActivity, title, description, imgUrl);
    this.activities.push(activity);
    return activity;  
}
deleteActivity(id) { 
    this.activities = this.activities.filter(activity => activity.id !== id);
} 

}

const repository = new Repository();

function addActivityToDom(activity) {
    const activitiesContainer = document.querySelector(".container");
    const card = document.createElement("div");
    card.className = "logo";
    card.innerHTML= `
   <img src="${activity.imgUrl}" alt="${activity.title}" class="logo__image" />
    <h3 class="logo__title">${activity.title}</h3>
    <p class="logo__description">${activity.description}</p>
    `;
// Agregar el evento de eliminación al hacer clic
card.addEventListener("click", () => {
    card.remove();  // Elimina la tarjeta del DOM
});

activitiesContainer.appendChild(card);    
}
const form = document.getElementById("form")
const addButton = form.querySelector(".button")

addButton.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const imgUrl = document.querySelector("#imgUrl").value;

    if (!title || !description || !imgUrl) {
        alert("Por favor, completar todos los campos.");
        return;
    }
    const id = Date.now();
    const newActivity = repository.createActivity(id, title, description, imgUrl); // Ya retorna la actividad
    addActivityToDom(newActivity);  // Pasa correctamente la nueva actividad
    form.reset();
});




