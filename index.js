const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors()) 
//depedencia para post
app.use(express.json())



let data = {
    "users": [
    {
      "id": 1,
      "first_name": "admin",
      "last_name": "admin",
      "email": "admin@admin.com",
      "password": "admin"
    }
  ],
  "products": [
    {
      "id": 2,
      "name": "Pelota",
      "price": 149.99,
      "category": "Deporte"
    },
    {
      "id": 3,
      "name": "Mouse",
      "price": 300,
      "category": "Electronicos"
    },
    {
      "id": 4,
      "name": "Teclado",
      "price": 250,
      "category": "Electronicos"
    },
    {
      "id": 5,
      "name": "Monitor",
      "price": 1000,
      "category": "Electronicos"
    },
    {
      "id": 6,
      "name": "Nvidia RTX 3090",
      "price": 1500,
      "category": "Gaming"
    },
    {
      "id": 7,
      "name": "Estante flotante",
      "price": 100,
      "category": "Hogar"
    },
    {
      "id": 8,
      "name": "Botella deportiva",
      "price": 75,
      "category": "Deportes"
    },
    {
      "id": 9,
      "name": "Guantes",
      "price": 35,
      "category": "Indumentaria"
    },
    {
      "id": 10,
      "name": "Medias",
      "price": 20,
      "category": "Indumentaria"
    },
    {
      "id": 11,
      "name": "Parlante",
      "price": 300,
      "category": "Electronicos"
    },
    {
      "id": 12,
      "name": "Gabinete Tt",
      "price": 200,
      "category": "Gaming"
    },
    {
      "id": 13,
      "name": "Fuente 600w 80plus White",
      "price": 400,
      "category": "Gaming"
    },
    {
      "id": 14,
      "name": "Teclado",
      "price": 250,
      "category": "Electronicos"
    },
    {
      "id": 15,
      "name": "MousePad",
      "price": 60,
      "category": "Gaming"
    },
    {
      "id": 16,
      "name": "Cuchara",
      "price": 10,
      "category": "Hogar"
    }
  ]
}

app.get('/', (req, res)=>{
  res.send('Bienvenido a la API ')
})
app.get('/api/usuarios', (req, res)=>{
    res.send(data)
})
app.get('/api/productos', (req, res)=>{
    res.send(data.products)
})

app.get('/api/usuarios/:id', (req, res)=>{
    const id = Number(req.params.id)
    const usuarios = data.users.find(usuario => usuario.id === id)
    if(usuarios){
        res.json(usuarios)
    }
    else{
        res.status(404).end()
    }
})
app.get('/api/productos/:id', (req, res)=>{
    const idProduct = Number(req.params.id)
    const productos = data.products.find(producto => producto.id === idProduct)
    res.json(productos)
});
//POST DE USUARIOS
app.post('/api/usuarios', (req, res)=>{
    const info = req.body

    const ids = data.users.map(dato => dato.id)
    const maxId = Math.max(...ids)
    const newUsuario = {
        id: maxId + 1,
        first_name: info.first_name,
        last: info.last_name,
        email: info.email,
        password: info.password
    }
    data.users = [...data.users, newUsuario] 
    console.log(data)
    res.json(newUsuario)
});
//POST DE PRODUCTOS
app.post('/api/productos', (req, res)=>{
  const info = req.body

  const ids = data.products.map(dato => dato.id)
  const maxId = Math.max(...ids)
  const newProduct = {
    id: maxId + 1,
    name: info.name,
    price: info.price,
    category: info.category
  };
  data.products = [...data.products, newProduct] 
  console.log(data)
  res.json(newProduct)
});


const PORT = 8080;
app.listen(PORT, ()=> console.log (`Servidor en funcionamiento en el puerto ${PORT}`))

module.exports = app