const { Product, saveProduct } = require('../models/products.model');

// Obtener productos
const getProductService = async (id) => {
  if (id) {
    return await Product.findOne({ id }, '-_id -__v')
                        .populate('provider', '-_id -__v');
  }
  return await Product.find({}, '-_id -__v')
                      .populate('provider', '-_id -__v');
};

// Crear producto
const createProductService = async (data) => {
  const { id, title, price, description, companyName } = data;
  if (!title || !price || !description || !companyName) {
    throw new Error("Faltan datos obligatorios");
  }

  return await saveProduct(id, title, price, description, companyName);
};

// (Opcional) editar producto
const editProductService = async (id, updates) => {
  return await Product.findOneAndUpdate({ id }, updates, { new: true });
};

// (Opcional) eliminar producto
const deleteProductService = async (id) => {
  return await Product.findOneAndDelete({ id });
};

module.exports = {
  getProductService,
  createProductService,
  editProductService,
  deleteProductService
};
