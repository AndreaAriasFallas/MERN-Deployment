const pirateController = require("../controller/pirate.controller");

module.exports = (app) => {
    app.post("/api/pirate/guardar", pirateController.crearPirate);
    app.get("/api/pirate", pirateController.mostrarPirates);
    app.get("/api/pirate/:id", pirateController.buscarPirate);
    app.delete("/api/pirate/borrar/:id", pirateController.borrarPirate);
}




