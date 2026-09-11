require('dotenv').config();
const cloudinary = require('./config/cloudinary');
(async()=>{
  console.log(process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY, "secret len", process.env.CLOUDINARY_API_SECRET?.length);
  try{
    const r = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/sample.jpg", {folder:"test"});
    console.log("SUCCESS", r.secure_url);
  }catch(e){ console.log("FAIL", e); }
})();