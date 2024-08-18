import express from 'express';
import { signup, login } from '../controllers/authController';
import { getUsers } from '../controllers/userControllers';
import authenticateToken from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', authenticateToken, getUsers);

export default router;
