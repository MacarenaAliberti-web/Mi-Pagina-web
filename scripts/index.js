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
        this.idActivity = 1;  
                              
    }


//b)
getAllActivities() {
    return this.activities;
}

//c)
createActivity(title, description,imgUrl) {
    const activity = new Activity (this.idActivity,title, description,imgUrl); 
   
    this.idActivity++;
    this.activities.push(activity);
}

deleteActivity(id) {
    this.activities = this.activities.filter(activity => activity.id !== id);
}
}


const repository = new Repository();

// Crear actividades
repository.createActivity('titulo 1', 'descripcion 1', 'imgUrl 1');
repository.createActivity('titulo 2', 'descripcion 2', 'imgUrl 2');
repository.createActivity('titulo 3', 'descripcion 3', 'imgUrl 3');

// Ver actividades iniciales
console.log('Antes de eliminar:', repository.getAllActivities());

// Intentar eliminar una actividad por ID
repository.deleteActivity(2);

// Ver actividades después de eliminar
console.log('Después de eliminar:', repository.getAllActivities());
