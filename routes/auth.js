const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");

//Helper functions
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require("../helpers/middlewares");

//Creamos la ruta de signup en `routes/auth.js`
// POST '/signup'

router.post(
  "/signup",
  //revisamos si el user no está
  //ya logueado usando la función helper( chequeamos si existe
  // req.session.currentUser
  isNotLoggedIn(),
  //revisa que se hayan completado los valores de username y
  //password usando la función helper
  validationLoggin(),
  async (req, res, next) => {
    const { email, password } = req.body;

    try {
      //chequea si el username ya existe en la BD
      const emailExists = await User.findOne({ email }, "email");
      //si el usuario ya existe, pasa el error a middleware error usando next ()
      if (emailExists) return next(createError(400));
      else {
        // en caso contrario, si el usuario no existe,
        //hace hash del password y crea un nuevo usuario en la BD
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);
        const newUser = await User.create({ email, password: hashPass });
        // luego asignamos el nuevo documento user a req.session.
        //currentUser y luego enviamos la respuesta en json
        req.session.currentUser = newUser;
        res
          .status(200) //ok
          .json(newUser);
      }
    } catch (error) {
      next(error);
    }
  }
);

//Creamos la ruta /login en `routes/auth.js`

//  POST '/login'

// chequea que el usuario no esté logueado usando la función
//helper (chequea si existe req.session.currentUser)
// revisa que el username y el password se estén enviando
//usando la función helper
router.post(
  "/login",
  isNotLoggedIn(),
  validationLoggin(),
  async (req, res, next) => {
    const { email, password } = req.body;
    try {
      //revisa si el usuario existe en la BD
      const user = await User.findOne({ email});
      //si el usuario no existe, pasa el error al middleware
      //error usando next()
      if (!user) {
        next(createError(404));
      }
      //si el usuario existe, hace hash del password y
      //lo compara con el password de la BD
      //loguea al usuario asignando el document
      //a req.session.currentUser, y devuelve un json con el user
      else if (bcrypt.compareSync(password, user.password)) {
        req.session.currentUser = user;
        res.status(200).json(user);
        return;
      } else {
        next(createError(401));
      }
    } catch (error) {
      next(error);
    }
  }
);

//Creamos la ruta para /logout en routes/auth.js

//POST  '/logout'

//revisa si el usuario está logueado usando la función helper
//(chequea si la sesión existe), y luego destruimos la sesión
router.post("/logout", isLoggedIn(), (req, res, next) => {
    req.session.destroy();
    // setea el código de estado y envía de vuelta la respuesta
    res
      .status(204) // No content
      .send();
      return;
});

//Creamos la ruta /private en `/routes/auth.js`


// GET '/private'   --> Only for testing

// revisa si el usuario está logueado usando la función helper
//(chequea si existe la sesión), y devuelve un mensaje
router.get("/private", isLoggedIn(), (req, res, next) => {
    // -setea el código de state y devuelve un mensaje de respuesta json
    res
    .status(200) //OK
    .json({ message: "Test - User is logged in"});
});
//Creamos la ruta /me en routes/auth.js

//GET '/me'

// chequea si el usuario está logueado usando la función helper
//(chequea si existe la sesión)
router.get("/me", isLoggedIn(), (req, res, next) => {
//si está logueado, previene que el password sea enviado y devuelve 
//un json con los datos del usuario (disponibles en req.session.currentUser)
req.session.currentUser.password ="*";
res.json(req.session.currentUser);


});
//Exportamos el router en /routes/auth.js

module.exports = router;