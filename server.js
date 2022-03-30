import productos from "./productos.js" ;
import express from "express";
import listadoProductos from "./funciones.js"

const producto = new listadoProductos ();
const app = express () ;
const router = express.Router() ;
const port = 8080 ;

app.use("/api", router)
app.use(express.static("./")) ;
router.use(express.json())
router.use(express.urlencoded({extended: true}))

const server = app.listen (port, () => {
    console.log ("Servidor iniciado...")
})

server.on ("error", error  => {
    console.log ("ocurrio un error", error)
})

router.get (("/productos"), (req, res) => {
    console.log ("este es el listado de productos" , productos)
    res.send (productos)
})

router.get (("/productos/:id"), (req,res) => {
    producto.filtrado(req,res)
})

router.post (("/productos"), (req,res) => {
    producto.nuevoIngreso(req,res)
})

router.put (("/productos/:id"), (req,res) => {
    producto.modificar(req,res)
})

/* 
body para enviar por postman
{"title": "producto agregado",
"price": 4541,
"thumbnail":"url.jpg",
"id": 4} */

router.delete (("/productos/:id"), (req,res) => {
    producto.borrar (req,res)
})


