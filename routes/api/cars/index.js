const db = require('../../../data/db')
const router = require('express').Router()
const uuid = require('uuid')
const { valCarsPost } = require('../../middleware')

module.exports = router

// Gets either whole array or if sent with VIN in body,
router.get('/', async (req, res, next) => {
  try {
    res.json(
      await db('cars').modify(
        qb => req.body.VIN && qb.where('VIN', req.body.VIN)
      )
    )
  } catch (e) {
    next(e)
  }
})

// Since we're just making dummy posts, set up automatic uuid
// creation if one isn't provided.
router.post('/', valCarsPost, async (req, res, next) => {
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
