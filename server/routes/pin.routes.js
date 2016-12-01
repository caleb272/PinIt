import { Router } from 'express'
import * as pinController from '../controllers/pin.controller'

const router = new Router()

router.route('/').get(pinController.getPins)
router.route('/').post(pinController.requireLoggedIn)
router.route('/').post(pinController.createPin)

export default router
