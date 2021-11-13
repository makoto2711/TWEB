// este archivo contiene las rutas y como se procesaran dentro del controlador
// cada ruta es una peticion que llega a traves de la url

const { Router } = require("express")
const express = require("express")
const router = express.Router()
express.Router()

// el destino de cada ruta sera una funcion del controlador

const alumnoController = require("../controllers/alumnoController")

router.get("/", alumnoController.list) // cuando se solicite un listar, se ejecutara esta funcion del controlador


module.exports = router




