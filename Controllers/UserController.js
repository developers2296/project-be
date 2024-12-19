const UserServices = require('../Services/UserServices');
const Response = require('../Services/Response');

exports.getProfile = async (req, res) => {
  const result = await UserServices.getProfile(req);
  return Response.sendResponse(res, 'User profile retrieved successfully.', result);
};

exports.updateProfile = async (req, res) => {
  const result = await UserServices.updateProfile(req);
  return Response.sendResponse(res, 'User profile updated successfully.', result);
};