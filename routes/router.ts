import {Router} from "express"
import {login, singup} from '../controllers/authControllers'

const router = Router()

router.post('/login',login);
router.post('/singup',singup)

export default router