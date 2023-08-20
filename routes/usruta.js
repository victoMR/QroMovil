const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const express = require('express');
const ruta = express.Router();

// Middleware básico para verificar autenticación
function isAuthenticated(req, res, next) {
    if (req.session && req.session.curp_persona) {
        return next();
    } else {
        return res.redirect('/login');
    }
}

//Ruta general se encuentra en home -------------------------------
ruta.get("/", async (req, res) => {
  res.render("login");
});

ruta.get("/home", async (req, res) => {
    res.render("home");
  });

ruta.get("/register", async (req, res) => {
  res.render("register");
});

// Ruta de inserción de nuevo usuario a la base de datos
ruta.post("/register", async (req, res) => {
  const { name, ap, curp, email, tel, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(req.body);

  try {
    const existingPerson = await prisma.cliente.findUnique({
      where: {
        curp_persona: curp,
      },
    });

    if (existingPerson) {
      return res.status(400).send("CURP invalido.");
    }

    // Obtener el último registro basado en el orden descendente de num_persona
    const lastPersona = await prisma.cliente.findFirst({
      orderBy: {
        num_persona: "desc",
      },
      select: {
        num_persona: true,
      },
    });

    const newNumPersona = (lastPersona ? lastPersona.num_persona : 0) + 1;

    const persona = await prisma.cliente.create({
      data: {
        num_persona: newNumPersona,
        curp_persona: curp,
        name_persona: name,
        ap_persona: ap,
        email_persona: email,
        tel_persona: tel,
        password_persona: hashedPassword,
        status_persona: true,
      },
    });

    req.session.curp_persona = persona.curp_persona;
    req.session.usuario = persona;

    res.redirect("/home");
    console.log("Registro de cliente insertado en la base de datos");
  } catch (error) {
    console.log(
      "Error al insertar el registro de cliente en la base de datos:",
      error
    );
    res.status(500).redirect("/error");
  }
});

ruta.post("/login", async (req, res) => {
    const { curp, password } = req.body;
  
    try {
      const persona = await prisma.cliente.findUnique({
        where: {
          curp_persona: curp,
        },
      });
  
      if (!persona) {
        // El cliente no existe en la base de datos
        return res.status(400).send("Credenciales incorrectas").redirect("/error");
      }
  
      const passwordMatch = await bcrypt.compare(
        password,
        persona.password_persona
      );
      if (!passwordMatch) {
        // La contraseña no coincide
        return res.status(400).send("Credenciales incorrectas").redirect("/error");
      }
  
      // Las credenciales son válidas, se inicia sesión exitosamente
      req.session.curp_persona = persona.curp_persona;
      // Almacenar la información del usuario en la sesión
      req.session.usuario = persona;
  
      // Redirigir a la ruta de inicio
      res.redirect("/home");
      console.log(persona.curp_persona);
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      console.log("Error al verificar las credenciales:", error);
      res.status(500).redirect("/error");
    }
  });

//Ruta  menu solo test  ------------------------------------------------------
ruta.get("/menu", async (req, res) => {
  // dev mode only
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
ruta.get("/reporte", async (req, res) => {
  res.render("reportes");
});

//Ruta  rutas de el autobus ------------------------------------------------------
ruta.get("/routes_bus", async (req, res) => {
  res.render("routes_bus");
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

ruta.get("/routes_bus", async (req, res) => {
  res.render("routes_bus");
});

ruta.get("/puntos", async (req, res) => {
  res.render("puntos");
});

// Ruta de usuario con autenticación
ruta.get("/user", isAuthenticated, async (req, res) => {
    try {
        const user = await prisma.cliente.findUnique({
            where: {
                curp_persona: req.session.curp_persona // el CURP es el usuario en la sesión
            }
        });

        if (!user) {
            return res.redirect('/login');
        }

        res.render("user", { user });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la información del usuario');
    }
});

// Ruta para cerrar sesión
ruta.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error al cerrar sesión');
        }
        res.redirect('/login');
    });
});

// Ruta para eliminar cuenta
ruta.get("/deleteAccount", isAuthenticated, async (req, res) => {
    try {
        await prisma.cliente.delete({
            where: {
                curp_persona: req.session.curp_persona
            }
        });

        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send('Error al eliminar la cuenta y cerrar sesión');
            }
            res.redirect('/login');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar la cuenta');
    }
});

//-----------Rutas para cada ruta de transporte publico--------

//Ruta Juncos
ruta.get("/Juncos", isAuthenticated, async (req,res) => {
  res.render("ruta1");
});

ruta.get("/Azucenas", isAuthenticated, async (req,res) => {
  res.render("ruta2");
});

ruta.get("/Col 10 de abril", isAuthenticated, async (req,res) => {
  res.render("ruta3");
});

module.exports = ruta;
