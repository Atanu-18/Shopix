// // const Product = require("../model/Product");
// // const cloudinary = require("../config/cloudinary");

// // //Get all products
// // const getproducts = async (req, res) => {
// //     try {
// //         const products = await Product.find({});
// //         res.json(products);
// //     } catch (error) {
// //         res.status(500).json({ message: 'Server Error' });
// //     }
// // };

// // //Get product by ID
// // const getProductById = async (req, res) => {
// //     try {
// //         const product = await Product.findById(req.params.id);
// //         if (product) {
// //             res.json(product);
// //         } else {
// //             res.status(404).json({ message: 'Product not found' });
// //         }
// //     } catch (error) {
// //         res.status(500).json({ message: 'Server Error' });
// //     }
// // };

// // //Create a new product
// // const createProduct = async (req, res) => {
// //     try {
// //         const { name, description, price, category, stock } = req.body;
// //         let imageUrl = '';
// //         if (req.file) {
// //             const result = await cloudinary.uploader.upload(req.file.path);
// //             console.log(result);
            
// //             imageUrl = result.secure_url;
// //         }

// //         const product = new Product({
// //             name,
// //             description,
// //             price,
// //             category,
// //             stock,
// //             imageUrl
// //         });
// //         const saveProduct = await product.save();
// //         res.status(201).json(saveProduct);
// //     } catch (error) {
// //         res.status(500).json({ message: 'Server Error' });
// //     }


// // };


// // //Update a product
// // const updateProduct = async (req, res) => {
// //     try {
// //         const { name, description, price, category, stock } = req.body;
// //         const product = await Product.findById(req.params.id);
// //         if(product) {
// //             product.name = name || product.name;
// //             product.description = description || product.description;
// //             product.price = price || product.price;
// //             product.category = category || product.category;
// //             product.stock = stock || product.stock;

// //             if(req.file) {
// //                 const result = await cloudinary.uploader.upload(req.file.path);
// //                 console.log(result);
// //                 product.imageUrl = result.secure_url;
// //             }
// //             const updatedProduct = await product.save();
// //             res.json(updatedProduct);
// //         } else {
// //             res.status(404).json({ message: 'Product not found' });
// //         }
        
// //     } catch (error) {
// //         res.status(500).json({ message: 'Server Error' });
// //     }
// // };

// // // Delete a product
// // const deleteProduct = async (req, res) => {
// //     try {
// //         const product = await Product.findById(req.params.id);
// //         if(product) {
// //             await product.deleteOne();
// //             res.json({ message: 'Product removed' });
// //         } else {
// //             res.status(404).json({ message: 'Product not found' });
// //         }
// //     } catch (error) {
// //         res.status(500).json({ message: 'Server Error' });
// //     }
// // };

// // module.exports = {
// //     getproducts,
// //     getProductById,
// //     createProduct,
// //     updateProduct,
// //     deleteProduct
// // };







// const Product = require("../model/Product");
// const cloudinary = require("../config/cloudinary");

// const getproducts = async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product) res.json(product);
//     else res.status(404).json({ message: 'Product not found' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createProduct = async (req, res) => {
//   try {
//     const { name, description, price, category, stock } = req.body;
//     if (!req.file) return res.status(400).json({ message: "Image is required" });

//     const formData = new FormData();
//     const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
//     formData.append("file", blob, req.file.originalname);
//     formData.append("upload_preset", "shopix_unsigned");

//     const cloudRes = await fetch(
//       `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
//       { method: "POST", body: formData }
//     );

//     const result = await cloudRes.json();
//     console.log("CLOUDINARY RESULT:", result);

//     if (!result.secure_url) throw new Error(JSON.stringify(result));

//     const product = new Product({
//       name, description, price, category, stock,
//       imageUrl: result.secure_url
//     });

//     const saved = await product.save();
//     res.status(201).json(saved);
//   } catch (error) {
//     console.log("CLOUDINARY ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// const updateProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });

//     const { name, description, price, category, stock } = req.body;
//     product.name = name || product.name;
//     product.description = description || product.description;
//     product.price = price || product.price;
//     product.category = category || product.category;
//     product.stock = stock || product.stock;

//     if (req.file) {
//       const result = await new Promise((resolve, reject) => {
//         const stream = cloudinary.uploader.upload_stream(
//           { upload_preset: "shopix_unsigned" }, 
//           (e, r) => e ? reject(e) : resolve(r)
//         );
//         stream.end(req.file.buffer);
//       });
//       product.imageUrl = result.secure_url;
//     }

//     const updated = await product.save();
//     res.json(updated);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (product) {
//       await product.deleteOne();
//       res.json({ message: 'Product removed' });
//     } else res.status(404).json({ message: 'Product not found' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// module.exports = { getproducts, getProductById, createProduct, updateProduct, deleteProduct };








const Product = require("../model/Product");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) res.json(product);
        else res.status(404).json({ message: "Product not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// FINAL - No 403, uses direct unsigned fetch
const createProduct = async (req, res) => {
    try {
        const { name, price, description, category, stock } = req.body;
        if (!req.file) return res.status(400).json({ message: "Image is required" });

        const formData = new FormData();
        const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
        formData.append("file", blob, req.file.originalname);
        formData.append("upload_preset", "shopix_unsigned");
        formData.append("folder", "shopix");

        const cloudRes = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
            { method: "POST", body: formData }
        );
        const result = await cloudRes.json();
        if (!result.secure_url) throw new Error(result.error?.message || "Upload failed");

        const product = new Product({ 
            name, price, description, category, stock, 
            imageUrl: result.secure_url 
        });
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.log("CLOUDINARY ERROR:", error);
        res.status(500).json({ message: error.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });

        const { name, price, description, category, stock } = req.body;
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.category = category || product.category;
        product.stock = stock || product.stock;

        if (req.file) {
            const formData = new FormData();
            const blob = new Blob([req.file.buffer], { type: req.file.mimetype });
            formData.append("file", blob, req.file.originalname);
            formData.append("upload_preset", "shopix_unsigned");
            formData.append("folder", "shopix");

            const cloudRes = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
                { method: "POST", body: formData }
            );
            const result = await cloudRes.json();
            product.imageUrl = result.secure_url;
        }

        const updatedProduct = await product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        await product.deleteOne();
        res.json({ message: "Product removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };