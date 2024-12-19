const UserModel = require('../Models/User.js');

exports.findByEmail = async (email) => {
  return await UserModel.findOne({ email: email.trim().toLowerCase() });
};

exports.getProfile = async (req) => {
  const { userId } = req.user;
  let user = await UserModel.findById(userId);
  return user;
};

exports.updateProfile = async (req) => {
  const { userId } = req.user;
  const { email, name, phone } = req.body;

  let fields = {
    email,
    name,
    phone,
  };

  let user = await UserModel.findByIdAndUpdate(userId, fields, { new: true });
  return user;
};