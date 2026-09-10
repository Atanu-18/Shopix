const Product = require("../models/productModel");
const cloudinary = require("../config/cloudinary");

//Get all products
const getproducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

//Get product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

//Create a new product
const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        let imageUrl = '';
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            console.log(result);
            
            imageUrl = result.secure_url;
        }

        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageUrl
        });
        const saveProduct = await product.save();
        res.status(201).json(saveProduct);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }


};


//Update a product
const updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const product = await Product.findById(req.params.id);
        if(product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.stock = stock || product.stock;

            if(req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                console.log(result);
                product.imageUrl = result.secure_url;
            }
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
        
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};