
var ruta = require("express").Router();

 //Ruta general se encuentra en home -------------------------------
ruta.get("/", async (req, res) => {
    res.render("home");
});
//  //Ruta  home ------------------------------------------------------
// ruta.get("/home", async (req, res) => {
//     res.render("home");
// });
 //Ruta  menu solo test  ------------------------------------------------------
ruta.get("/menu", async (req, res) => {  // dev mode only
    res.render("templates/menu");
});
 //Ruta  911 ------------------------------------------------------
ruta.get("/911", async (req, res) => {
    res.render("911");
});
 //Ruta  bestoption ia  ------------------------------------------------------
ruta.get("/bestoption", async (req, res) => {
    res.render("bestoption");
});
 //Ruta  fallas ------------------------------------------------------
ruta.get("/faliures", async (req, res) => {
    res.render("faliures");
});
 //Ruta  rutas de el autobus ------------------------------------------------------
ruta.get("/routes_bus", async (req, res) => {
    res.render("routes_bus");
});
 //Ruta  usuario ------------------------------------------------------
ruta.get("/user", async (req, res) => {
    res.render("user");
});

ruta.get("/bus", async (req, res) => {
    res.render("bus");
});

ruta.get("/taxi", async (req, res) => {
    res.render("taxi");
});

ruta.get("/bici", async (req, res) => {
    res.render("bici");
});

 //Ruta  copy solo test  ------------------------------------------------------
ruta.get("/copy", async (req, res) => {
    res.render("home_copy");
});

module.exports = ruta;