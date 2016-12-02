import { Router } from 'express'
import pin from './pin.routes.js'

const router = new Router()

router.use('/pin', pin)

export default router
