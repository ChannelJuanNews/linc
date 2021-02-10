let mongoose = require("mongoose");

export default mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hyuvv.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
