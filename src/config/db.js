const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/dbteste",
    );
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.error("Erro de conexão com MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;


