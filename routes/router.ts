import {Router} from "express"
import { login } from "../controllers/api/login/login";
import { Parent } from "../controllers/api/parent/Parent";

const router = Router()

router.post('/login',login);
router.post('/createparent',Parent)

export default router;