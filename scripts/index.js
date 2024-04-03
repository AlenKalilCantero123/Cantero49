



// Clase Activity
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}




// Clase Repository
class Repository {
    constructor() {
        this.activities = [];
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(id, title, description, imgUrl) {
        const activity = new Activity(id, title, description, imgUrl);
        this.activities.push(activity);
    }

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

// Ejemplo de uso
const repository = new Repository();

// Crear actividades de ejemplo
repository.createActivity(1, "Actividad 1", "Descripción de la actividad 1", "imagen1.jpg");
repository.createActivity(2, "Actividad 2", "Descripción de la actividad 2", "imagen2.jpg");
repository.createActivity(3, "Actividad 3", "Descripción de la actividad 3", "imagen3.jpg");

console.log(repository.getAllActivities()); // Mostrar todas las actividades

repository.deleteActivity(2); // Eliminar la actividad con id 2
console.log(repository.getAllActivities()); // Mostrar todas las actividades después de eliminar una
