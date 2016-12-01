import { Router } from 'express'
import post from './post.routes.js'
import pin from './pin.routes.js'

const router = new Router()

router.use(post)
router.use('/pin', pin)

export default router
