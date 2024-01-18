import {
    deletedProduct,
    getAllProducts,
    getProductById,
  } from "../services/productService.js";
  
  const listAllProducts = (req, res) => {
    const products = getAllProducts();
  
    if (products.length === 0) {
      return res.status(200).json({ mensagem: "Não há produto cadastrado!" });
    }
  
    if (products) {
      return res
        .status(200)
        .json({ data: products, mensagem: "Produtos encontrados com sucesso!" });
    }
  
    return res.status(400).json({ mensagem: "Produtos não encontrados!" });
  };
  
  const listAProduct = (req, res) => {
    const productId = req.params.id;
  
    if (!productId) {
      return res.status(400).json({ mensagem: "O id é obrigatório" });
    }
  
    const product = getProductById(productId);
  
    if (!product) {
      return res.status(400).json({ mensagem: "O id é inexistente!" });
    }
  
    return res
      .status(200)
      .json({ data: product, mensagem: "Produto encontrado com sucesso!" });
  };
  
  const deleteAProduct = (req, res) => {
    const productId = req.params.id;
  
    if (!productId) {
      return res.status(400).json({ mensagem: "O id é obrigatório!" });
    }
  
    const product = getProductById(productId);
  
    if (!product) {
      return res.status(400).json({ mensagem: "O produto não foi encontrado!" });
    }
  
    const deleteProduct = deletedProduct(product.id);
  
    return res
      .status(200)
      .json({ data: deleteProduct, mensagem: "Produto deletado com sucesso!" });
  };
  const createAProduct = (req, res) => {};
  const editAProduct = (req, res) => {};
  const listProductsCost = (req, res) => {};
  const listProductCost = (req, res) => {};
  
  export {
    createAProduct,
    deleteAProduct,
    editAProduct,
    listAProduct,
    listAllProducts,
    listProductCost,
    listProductsCost,
  };