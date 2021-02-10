import mongoose from "mongoose";
import crypto from "crypto";

let UserSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,

    match: [/\S+@\S+\.\S+/, "is invalid"],
  },

  name: {
    type: String,
  },

  username: {
    type: String,
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
  },

  phone: {
    type: Number,
    match: [/^$|^\d{10}$/, "is invalid"],
  },

  bio: {
    type: String,
  },

  hash: {
    type: String,
  },

  salt: {
    type: String,
  },

  image: {
    type: String,
  },

  verified_email : {
      type : Boolean, 
      default : false, 
  }, 

  verified : {
      type : Boolean, 
      default false, 
  }

});

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UserSchema.methods.validatePassword = function (password) {
  let hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UserSchema.methods.generateJWT = function () {
  let today = new Date();
  let exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign(
    {
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    },
    secret
  );
};

UserSchema.methods.getLinks = function () {
  return ["link1", "link2", "link3"];
};

UserSchema.methods.toAuthJSON = function () {
  return {
    username: this.username,
    email: this.email,
    token: this.generateJWT(),
    bio: this.bio,
    links: this.getLinks(),
  };
};

let UserModel = mongoose.models["User"] || mongoose.model("User", UserSchema);

export default { model: UserModel, schema: UserSchema };
