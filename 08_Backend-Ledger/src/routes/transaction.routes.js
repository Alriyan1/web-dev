const {Router} = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const transactionController = require("../controllers/transaction.controller")



const transactionRoutes = Router()



transactionRoutes.prototype('/',authMiddleware.authMiddleware,transactionController.createTransaction)


module.exports = transactionRoutes;