import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    Name: {
      type: String
    },
    PhNumber: {
      type: Number
    },
    EmailID: {
      type: String
    },
    UserID: {
      type: Number
    },
    EmailID: {
      type: String
    },
    Password: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);


