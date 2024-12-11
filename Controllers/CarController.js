const fs = require('fs');
const path = require('path');
const CarServices = require('../Services/CarServices');
const Response = require('../Services/Response');

exports.store = async (req, res) => {
  const Validations = {
    model: 'Car Model field is required.',
    price: 'Car price field is required.',
    phone: 'Mobile Number Required',
    city: 'City Required',
  };

  for (const [key, value] of Object.entries(Validations)) {
    if (!req.body[key]) return Response.sendError(res, value, [], 422);
  }
  
  if (!req.files.length){
    console.log(req.files.length);
    
    return Response.sendError(res, 'Attachment file required.', [], 422);
  }

  req.body.fileName = await makeMultipleImagePath(process.env.CARS_DIR, req);

  const result = await CarServices.store(req);

  return Response.sendResponse(res, 'Car created successfully.', result);
};

async function makeMultipleImagePath(dir, req) {
  const name = req.files;
  const { userId } = req.user;
  const files = [];

  const userDir = path.join(dir, 'cars');
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir, { recursive: true });
  }

  await Promise.all(name.map(async ({ filename, path: filePath }) => {
    const localPath = path.join(userDir, filename); 
    fs.renameSync(filePath, localPath);
    files.push(localPath);
  }));

  req.body.attachments &&
    req.body.attachments.map((filename) => {
      files.push(path.join(userDir, filename));
    });

  return files;
}
