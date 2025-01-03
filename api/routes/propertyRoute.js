import express from 'express'
import * as propertyController from '../controllers/propertyController.js'

const router = express.Router()

router.get('/properties', propertyController.getProperties)
router.post('/properties', propertyController.createProperty)

export default router