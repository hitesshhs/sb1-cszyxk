import Product from '../models/Product.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinary.js';

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      stock,
      attributes,
      sustainability
    } = req.body;

    const imageUrls = [];
    if (req.files) {
      for (const file of req.files) {
        const result = await uploadToCloudinary(file.path);
        imageUrls.push({
          url: result.secure_url,
          publicId: result.public_id
        });
      }
    }

    const product = new Product({
      name,
      description,
      price,
      images: imageUrls,
      category,
      artisan: req.user.userId,
      stock,
      attributes,
      sustainability
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { category, search, sort, page = 1, limit = 10 } = req.query;
    const query = {};

    if (category) query.category = category;
    if (search) query.$text = { $search: search };

    const sortOptions = {};
    if (sort) {
      const [field, order] = sort.split(':');
      sortOptions[field] = order === 'desc' ? -1 : 1;
    }

    const products = await Product.find(query)
      .sort(sortOptions)
      .populate('category')
      .populate('artisan', 'name')
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Product.countDocuments(query);

    res.json({
      products,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate('category')
      .populate('artisan', 'name');

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.artisan.toString() !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const updates = req.body;
    if (req.files) {
      const imageUrls = [];
      for (const file of req.files) {
        const result = await uploadToCloudinary(file.path);
        imageUrls.push({
          url: result.secure_url,
          publicId: result.public_id
        });
      }
      updates.images = imageUrls;

      // Delete old images from Cloudinary
      for (const image of product.images) {
        await deleteFromCloudinary(image.publicId);
      }
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};