const jwt = require('jsonwebtoken');

const response = require("../Services/Response.js");

module.exports = (req, res, next) => {
	try 
	{
		const token = req.headers['authorization']?.split(' ')[1];

		if (!token) {
		  return res.status(403).json({ message: 'No token provided' });
		}
	  
		jwt.verify(token, 'Check', (err, decoded) => {
		  if (err) {
			return res.status(401).json({ message: 'Authentication failed. Token has expired.' });
		  }
		  req.user = decoded;
		  next();
		});
	} 
	catch (error) 
	{   
		return response.sendError(res, 'Authentication failed. Token has been expired.', [], 401);
	}
};