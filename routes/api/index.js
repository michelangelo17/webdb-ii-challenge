const router = require('express').Router()
const accountsRouter = require('./cars')

module.exports = [router.use('/cars', accountsRouter)]
