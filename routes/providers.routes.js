const providersController = require('../controllers/providers.controllers');
const router = require('express').Router();

//GET http://localhost:3000/api/providers
router.get("{/:id}", providersController.getAllproviders);

//POST http://localhost:3000/api/providers
/*
A envida por body:
 {
   id: 4,
    "company_name": "Help me Dios",
    "cif": "B40236154",
    "address": "Calle de Primrose Everdeem 3",
    "url_web": "https://www.helpmedios.com"
  },
*/
router.post("/", providersController.postProvider);

router.put("/:id", providersController.putProvider);

router.delete("/:id", providersController.deleteProvider);

module.exports = router;
