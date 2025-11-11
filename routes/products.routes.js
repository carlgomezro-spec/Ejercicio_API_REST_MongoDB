const productsController = require('../controllers/products.controllers');
const router = require('express').Router();

//GET http://localhost:3000/api/products
router.get("{/:id}", productsController.getProduct);

//POST http://localhost:3000/api/products
/*
A envida por body:
 {
   id: 3,
    title: "Un croissant de chocolate",
    price: 1.60,
    description: "Rico y weno",
    provider: "690cc398e6a926fd019ff85e"
  },
*/
router.post("/", productsController.createProduct);

router.put("/:id", productsController.editProduct);

router.delete("/:id", productsController.deleteProduct);

module.exports = router;
