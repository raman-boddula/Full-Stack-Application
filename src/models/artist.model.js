const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");

const artistSchema = new mongoose.Schema({
    'firstname': { type: 'string', required: true },
    'lastname': { type: 'string', required: true },
    'gender': { type: 'string', required: true },
    'email':{type: 'string', required: true,unique: true},
    'username': { type: 'string', required: true, unique: true },
    'password': { type: 'string', required: true },
    'role':{type:String,required:true}
}, {
    versionKey: false,
    timestamp: true
});


artistSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  bcrypt.hash(this.password, 10, (err, hash) => {
    this.password = hash;
    return next();
  });
});

artistSchema.methods.checkPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, function (err, same) {
      if (err) return reject(err);
      return resolve(same);
    });
  });
};

module.exports = mongoose.model('artist', artistSchema);