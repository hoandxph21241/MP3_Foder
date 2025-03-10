var Model = require("../model/db_song");

async function createDefaultData() {

  const adminExists = await Model.UserModel.findOne({ "role": 2 });
  if (!adminExists) {
    const defaultAdmin = new Model.UserModel({
      nameAccount: 'admin@example.com',
      namePassword: 'admin',
      userName: 'Admin',
      fullName: 'Admin',
      imageAccount: 'Admin',
      gmail: 'admin@example.com',
      grender: 'Male',
      'role': 2,
      'locked': false
    });
    await defaultAdmin.save();
    console.log("Admin_Data_Create");
  } else {
    console.log("Admin_No_Create");
  }

  const userExists = await Model.UserModel.findOne({ "role": 1 });
  if (!userExists) {
    const defaultUser = new Model.UserModel({
      nameAccount: 'user@example.com',
      namePassword: 'user',
      userName: 'User',
      fullName: 'User',
      imageAccount: 'User',
      gmail: 'user@example.com',
      grender: 'Male',
      'role': 1,
      'locked': false
    });
    await defaultUser.save();
    console.log("User_Data_Create");
  } else {
    console.log("User_No_Create");
  }

  console.log("Finished_Create");
}

createDefaultData().catch(error => {
  console.error("Error:", error);
});





exports.yeu_cau_dang_nhap = (req, res, next) => {
  if (req.session.userLogin) {
    console.log("Đã Đăng Nhập")
    next();
  } else {
    console.log("Chưa Đăng Nhập");
    res.redirect("/auth/signin");
  }
};
