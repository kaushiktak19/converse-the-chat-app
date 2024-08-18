import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import { getUsers } from './controllers/userControllers';
import authenticateToken from './middlewares/authMiddleware'; 

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Adjust this as needed
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use('/api/auth', authRoutes);


app.get('/api/auth/users', authenticateToken, getUsers);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
