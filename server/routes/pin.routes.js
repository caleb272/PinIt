import { Router } from 'express'
import * as pinController from '../controllers/pin.controller'

const router = new Router()

router.route('/').get(pinController.getPins)
router.route('/').all(pinController.requireLoggedIn)
router.route('/').post(pinController.createPin)
router.route('/').put(pinController.updatePin)
router.route('/').delete(pinController.deletePin)

export default router
