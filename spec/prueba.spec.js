//Debe ser una clase
//Debe tener los metodos: 
//- createActivity(): debe instanciar una actividad con los datos correspondientes y almacenarla en su arreglo.
//- deleteActivity(): debe recibir un id y filtrar el arreglo para eliminar la actividad correspondiente.
//- getAllActivities(): debe retornar un arreglo con todas las actividades.

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

createActivity({id, title, description, imgUrl}) {}

deleteActivity(id) {}

getAllActivities() {
  return this.activities;
}
}

describe("La clase Activity", () => {
  it("Debe ser una clase", () => {
      expect(typeof Activity.prototype.constructor).toBe("function");
  });
});

describe("La clase Repository", () => {
  it("Debe tener implementado el método createActivity()", () => {
    const repository = new Repository(); 
    expect(repository.createActivity).toBeDefined(); 
    expect(typeof repository.createActivity).toBe("function"); 
  });
  it("Debe tener implementado el método deleteActivity()", () => {
    const repository = new Repository(); 
    expect(repository.deleteActivity).toBeDefined(); 
  
});
it("Debe tener implementado el método getAllActivity()", () => {
  const repository = new Repository(); 
  expect(repository.getAllActivities).toBeDefined(); 
})
})

