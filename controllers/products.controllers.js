const {Product, saveProduct} = require('../models/products.model');
const {getProductService, createProductService, editProductService, deleteProductService} = require('../services/products.service');

// (GET)
const getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const products = await getProductService(id);
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(400).json({ msj: error.message });
  }
};

// (POST)
const createProduct = async (req, res) => {
  try {
    await createProductService(req.body);
    res.status(201).json({ msj: "Producto creado!" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ msj: error.message });
  }
};

// (PUT)
const editProduct = async (req, res) => {
  try {
    const updated = await editProductService(req.params.id, req.body);
    res.status(200).json({ msj: "Producto editado!", updated });
  } catch (error) {
    res.status(400).json({ msj: error.message });
  }
};

// (DELETE)
const deleteProduct = async (req, res) => {
  try {
    await deleteProductService(req.params.id);
    res.status(200).json({ msj: "Producto borrado!" });
  } catch (error) {
    res.status(400).json({ msj: error.message });
  }
};

module.exports = {
  createProduct,
  getProduct,
  editProduct,
  deleteProduct
};