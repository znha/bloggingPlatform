import jwt from 'jsonwebtoken';

export const  verifyToken = (req, res, next) => {
  const token =  req.cookies.token;

  if (!token) return res.status(401).json({ error: 'Not authorized' });
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).json({ error: 'Token invalid or expired' });
    req.user = { id: payload.sub, email: payload.email };
    next();
  });
}
