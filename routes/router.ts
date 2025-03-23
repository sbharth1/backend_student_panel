import {Router} from "express"
import {login} from '../controllers/auth/login/login'

const router = Router()

router.post('/login',login);

export default router;