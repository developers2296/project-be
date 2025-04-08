import pkg from 'jsonwebtoken';
import { sendError } from "../Services/Response.js";

const { verify } = pkg;

export default (req, res, next) => {
	try 
	{
		const token = req.headers['authorization']?.split(' ')[1];

		if (!token) {
		  return res.status(403).json({ message: 'No token provided' });
		}
	  
		verify(token, 'Check', (err, decoded) => {
		  if (err) {
			return res.status(401).json({ message: 'Authentication failed. Token has expired.' });
		  }
		  req.user = decoded;
		  next();
		});
	} 
	catch (error) 
	{   
		return sendError(res, 'Authentication failed. Token has been expired.', [], 401);
	}
};