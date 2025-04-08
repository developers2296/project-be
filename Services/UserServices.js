import User from '../Models/User.js';

export async function findByEmail(email) {
  return await User.findOne({ email: email.trim().toLowerCase() });
}

export async function getProfile(req) {
  const { userId } = req.user;
  let user = await User.findById(userId);
  return user;
}

export async function updateProfileData(req) {
  const { userId } = req.user;
  const { email, name, phone } = req.body;

  let fields = {
    email,
    name,
    phone,
  };

  let user = await User.findByIdAndUpdate(userId, fields, { new: true });
  return user;
}