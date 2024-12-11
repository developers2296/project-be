const UserModel = require('../Models/User.js');

exports.findByEmail = async (email) => {
  return await UserModel.findOne({ email: email.trim().toLowerCase() });
};