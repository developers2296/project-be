import { getProfile, updateProfileData } from '../Services/UserServices.js';
import { sendResponse } from '../Services/Response.js';

export async function getProfileData(req, res) {
  const result = await getProfile(req);
  return sendResponse(res, 'User profile retrieved successfully.', result);
}

export async function updateProfile(req, res) {
  const result = await updateProfileData(req);
  return sendResponse(res, 'User profile updated successfully.', result);
}