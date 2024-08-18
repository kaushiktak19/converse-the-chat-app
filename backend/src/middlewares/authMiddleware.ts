// authMiddleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: number;
  username: string;
}

// Middleware function to authenticate the token
const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;
    (req as any).user = decoded; // Attach user payload to request object
    //console.log('Token successfully verified:', decoded);
    next();
  } catch (err) {
    console.log('Error in token verification:', err);
    return res.status(403).json({ message: 'Forbidden' });
  }
};

export default authenticateToken;
