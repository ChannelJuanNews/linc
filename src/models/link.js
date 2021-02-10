import mongoose from "mongoose";

let LinkSchema = mongoose.Schema({
  text: {
    type: String,
  },

  thumbnail: {
    type: String,
  },

  uri: {
    type: String,
  },

  clicks: {
    type: Number,
  },

  views: {
    type: Number,
  },

  qr: {},

  live: {
    type: Boolean,
    default: false,
  },

  start_date: {
    type: Date,
  },

  end_date: {},
});

let LinkModel = mongoose.models["Link"] || mongoose.model("Link", UserSchema);

export default { model: LinkModel, schema: LinkSchema };
