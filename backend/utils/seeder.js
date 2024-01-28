const connectDatabase = require('../config/database')
const products = require('../data/products.json')
const Product = require('../models/productModel')
const dotenv = require('dotenv')
dotenv.config({path : "backend/config/config.env"})
connectDatabase()

const seedProducts = async () => {
    try {
        await Product.deleteMany()
        console.log('Products deleted')
        await Product.insertMany(products)
        console.log('Products added')
        process.exit()
    } catch (error) {
        console.log(error.message)
    }
} 

seedProducts()