const transactionModel = require('../models/transaction.model')
const ledgerModel = require('../models/ledger.model')
const emailService = require('../services/email.service')
const accountModel = require('../models/account.model')

async function createTransaction(req,res){

    const {fromAccount,toAccount,amount,idempotencyKey} = req.body

    if (!fromAccount || !toAccount || !amount || !idempotencyKey) {
        return res.status(400).json({
            message:"From Account, To Account, Amount and Idempotency Key are required"
        })

    }

    const fromUserAccount = await accountModel.findOne({
        _id:fromAccount,
    })

    const toUserAccount = await accountModel.findOne({
        _id:toAccount,
    })

    if (!fromUserAccount || !toUserAccount) {
        return res.status(400).json({
            message:"From Account or To Account not found"
        })
    }

    const isTransactionAlreadyExists = await transactionModel.findOne({
        idempotencyKey:idempotencyKey,
    })

    if (isTransactionAlreadyExists) {
        if (isTransactionAlreadyExists.status === 'COMPLETED') {
            return res.status(200).json({
                message:"Transaction already processed",
                transaction: isTransactionAlreadyExists
            })
        }

        if (isTransactionAlreadyExists.status === "PENDING"){
            return res.status(200).json({
                message:"Transaction is still processing"
            })
        }

        if(isTransactionAlreadyExists.status === "FAILED"){
            return res.status(500).json({
                message: "Transaction processing failed, please retry "
            })
        }

        if (isTransactionAlreadyExists.status === 'REVERSED'){
            return res.status(500).json({
                message: "Transaction was reversed, please retry"
            })
        }
    }

    if (fromUserAccount.status!=="ACTIVE" || toUserAccount!=="ACTIVE"){
        return res.status(400).json({
            message:"Both fromAccount and toAccount must be ACTIVE to process transaction"
        })
    }

    const balance = await fromUserAccount.getBalance()

    if (balance<amount){
        return res.status(400).json({
            message: `Insufficient balance. Current balance is ${balance}. Requested balance is ${amount}`
        })
    }

}