const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.json({
        users: [
        {
          id: 1,
          first_name: "Chelo",
          last_name: "Redux",
          email: "chelor@chelo.com",
          password: "uno"
        },
        {
          "id": 2,
          "first_name": "Laila",
          "last_name": "React",
          "email": "lailar@chela.com",
          "password": "dos"
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
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
