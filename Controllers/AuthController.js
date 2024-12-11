const jwt = require('jsonwebtoken');
const Response = require('../Services/Response.js');
const UserService = require('../Services/UserServices.js');

exports.login = async (req, res) => {
  let { email, password } = req.body;
  
  if (!email)
    return Response.sendError(res, 'The email field is required..', [], 422);
  if (!password) {
    return Response.sendError(res, 'The password field is required.', [], 422);
  }
  
  let userInfo = await UserService.findByEmail(email);
  
  if (!userInfo)
    return Response.sendError(res, 'User does not exist.', [], 400);

  let matched = await comparePassword(password, userInfo.password);

  if (!matched) {
    return Response.sendError(res, 'Invalid credentials', [], 422);
  }

  let data = {
    email: userInfo.email,
    userId: userInfo._id,
  };

  let optional = {expiresIn: '1h'};
  const token = jwt.sign(data, 'Check', optional);

  let result = {
    _id: userInfo._id,
    email: userInfo.email,
  };
  return Response.sendResponse(res, 'You are successfully logged in.', { token: token, user: result });
};

async function comparePassword(actual_password, encrypted_password) {
  return actual_password === encrypted_password;
}
