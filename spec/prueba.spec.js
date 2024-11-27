class Activity  {    
  constructor(id, title, description, imgUrl) {
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

  createActivity({id, title, description, imgUrl}) {
      const activity = new Activity(id, title, description, imgUrl);
      this.activities.push(activity);
      return activity;
  }

  deleteActivity(id) {
      this.activities = this.activities.filter(activity => activity.id !== id);
  }

  getAllActivities() {
      return this.activities;
  }
}

// Pruebas para la clase Activity
describe("La clase Activity", () => {
  it("Debe ser una clase", () => {
      expect(typeof Activity.prototype.constructor).toBe("function");
  });
});

// Pruebas para la clase Repository
describe("La clase Repository", () => {
  it("Debe tener implementado el método createActivity()", () => {
      const repository = new Repository(); 
      expect(repository.createActivity).toBeDefined(); 
      expect(typeof repository.createActivity).toBe("function"); 
  });

  it("Debe tener implementado el método deleteActivity()", () => {
      const repository = new Repository(); 
      expect(repository.deleteActivity).toBeDefined(); 
      expect(typeof repository.deleteActivity).toBe("function");
  });

  it("Debe tener implementado el método getAllActivities()", () => {
      const repository = new Repository(); 
      expect(repository.getAllActivities).toBeDefined(); 
      expect(typeof repository.getAllActivities).toBe("function");
  });
});

// Pruebas adicionales para la funcionalidad de Repository
describe("Repository", () => {
  let repository;

  beforeEach(() => {
      repository = new Repository(); // Inicializa un repositorio vacío antes de cada prueba
  });

  it("Debe devolver un array vacío cuando no se agreguen actividades", () => {
      expect(repository.getAllActivities()).toEqual([]); // Comprobamos que el array está vacío inicialmente
  });

  it("Debe agregar una nueva actividad correctamente", () => {
      const newActivity = repository.createActivity({
          id: 1, 
          title: "Actividad 1", 
          description: "Descripción de la actividad 1", 
          imgUrl: "url_imagen_1"
      });
      expect(repository.getAllActivities()).toEqual([newActivity]); // Verificamos que la actividad se haya agregado
  });

  it("Debe eliminar una actividad correctamente", () => {
      const newActivity = repository.createActivity({
          id: 1, 
          title: "Actividad 1", 
          description: "Descripción de la actividad 1", 
          imgUrl: "url_imagen_1"
      });
      repository.deleteActivity(1);
      expect(repository.getAllActivities()).toEqual([]); // Verificamos que la actividad se haya eliminado
  });

  it("Debe devolver las actividades correctas después de agregar y eliminar", () => {
      const activity1 = repository.createActivity({
          id: 1, 
          title: "Actividad 1", 
          description: "Descripción de la actividad 1", 
          imgUrl: "url_imagen_1"
      });
      const activity2 = repository.createActivity({
          id: 2, 
          title: "Actividad 2", 
          description: "Descripción de la actividad 2", 
          imgUrl: "url_imagen_2"
      });

      repository.deleteActivity(1); // Eliminamos la actividad con id 1
      expect(repository.getAllActivities()).toEqual([activity2]); // Comprobamos que solo queda la actividad con id 2
  });
});


