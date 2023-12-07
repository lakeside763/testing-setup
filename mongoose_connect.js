const mongoose = require("mongoose");

const url = 'mongodb://127.0.0.1:27017/mongoose'

const connectMongose = async () => {
  const connect = await mongoose.connect(url);
  if (connect) console.log('connectd');
}

module.exports = {
  connectMongose
}