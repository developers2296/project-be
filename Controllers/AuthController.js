import pkg from 'jsonwebtoken';
import { sendError, sendResponse } from '../Services/Response.js';
import { findByEmail } from '../Services/UserServices.js';

const { sign } = pkg;

export async function login(req, res) {

  console.log('Login controller called');
  
  let { email, password } = req.body;
  
  if (!email)
    return sendError(res, 'The email field is required..', [], 422);
  if (!password) {
    return sendError(res, 'The password field is required.', [], 422);
  }
  
  let userInfo = await findByEmail(email);
  
  if (!userInfo)
    return sendError(res, 'User does not exist.', [], 400);

  let matched = await comparePassword(password, userInfo.password);

  if (!matched) {
    return sendError(res, 'Invalid credentials', [], 422);
  }

  let data = {
    email: userInfo.email,
    userId: userInfo._id,
  };

  let optional = {expiresIn: '1h'};
  const token = sign(data, 'Check', optional);

  let result = {
    _id: userInfo._id,
    email: userInfo.email,
  };
  return sendResponse(res, 'You are successfully logged in.', { token: token, user: result });
}

async function comparePassword(actual_password, encrypted_password) {
  return actual_password === encrypted_password;
}
