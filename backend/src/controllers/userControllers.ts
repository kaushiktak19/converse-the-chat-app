import { Request, Response } from 'express';
import pool from '../db'; // Import your database pool or client
import jwt from 'jsonwebtoken';

export const getUsers = async (req: Request, res: Response) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  // Type guard to ensure JWT_SECRET is not undefined
  if (!JWT_SECRET) {
    return res.status(500).json({ message: 'Server configuration error' });
  }

  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    console.log('Token successfully verified:', decoded);

    const loggedInUser = decoded.username;
    if (!loggedInUser) {
      return res.status(403).json({ message: 'Forbidden: Username not found in token' });
    }
    //console.log('Logged in user:', loggedInUser);

    const result = await pool.query('SELECT username FROM users WHERE username != $1', [loggedInUser]);
    //console.log('Users fetched from database:', result.rows);

    res.status(200).json({ users: result.rows.map((row) => row.username) });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};
