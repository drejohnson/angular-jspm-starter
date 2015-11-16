import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  displayName: String,
  picture: String,
  facebook: String,
  google: String,
  twitter: String
});

userSchema.pre('save', (next) => {
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10).then( (salt) => {
    return bcrypt.hash(this.password, salt);
  }).then( (hash) => {
    this.password = hash;
    next();
  });
});

// Helper method for validating user's password.
userSchema.methods.comparePassword = (password, done) => {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch);
  });
};

// Helper method for getting user's gravatar.
userSchema.methods.gravatar = (size) => {
  if (!size) size = 200;
  if (!this.email) return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  const md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};

const User = mongoose.model('User', userSchema);

export default User;
