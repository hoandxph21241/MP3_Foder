var db = require("./db");
var userSchema = new db.mongoose.Schema(
  {
    userID: { type: String, require: true },
    nameAccount: { type: String, require: true },
    namePassword: { type: String, require: true },
    imageAccount: { type: String, require: false },
    userName: { type: String, require: false },
    fullName: { type: String, require: false },
    gmail: { type: String, require: false },
    grender: { type: String, require: false },
    // Phân Quyền
    role: { type: Number, require: true, default: 1 },
    // OTP đổi mật khẩu
    otp: { type: String, require: false },
  },
  {
    collection: "User",
  }
);
let UserModel = db.mongoose.model("UserModel", userSchema);
var mp3Schema = new db.mongoose.Schema(
  {
  name: String,
  data: {type: Buffer}
  },
  {
    collection: "mp3",
  }
);
let MP3 = db.mongoose.model("MP3", mp3Schema);

module.exports = {
  UserModel,
  MP3,
};
