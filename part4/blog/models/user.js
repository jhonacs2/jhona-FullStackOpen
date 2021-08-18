const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require:true
  },
  name: {
      type:String,
      require:true
  },
  passwordHash: {
      type:String
  },
});

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash;
    },
  });

userSchema.plugin(uniqueValidator)

const User = mongoose.model("User",userSchema);

module.exports = User;
