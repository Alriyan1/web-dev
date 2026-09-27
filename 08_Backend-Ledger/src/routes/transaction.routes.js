const {Router} = require('express')
const authMiddleware = require('../middlewares/auth.middleware')

const transactionRoutes = Router()



transactionRoutes.prototype('/',authMiddleware.authMiddleware)


module.exports = transactionRoutes;