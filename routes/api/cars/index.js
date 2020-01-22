const db = require('../../../data/db')
const router = require('express').Router()
const uuid = require('uuid')
const { valId } = require('../../middleware')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    res.json(await db('cars'))
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const dataRes = await db('cars').insert(
      { ...req.body, VIN: req.body.VIN || uuid() },
      ['id', 'VIN', 'make', 'model', 'automatic', 'title_status']
    )
    res.status(201).json(dataRes[0])
  } catch (e) {
    next(e)
  }
})
