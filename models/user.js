const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: String,
    password: String,
    userImage: String,
    helpMeRequests: [{ type: Schema.Types.ObjectId, ref: "HelpRequest" }],
    helpOthersRequests: [{ type: Schema.Types.ObjectId, ref: "HelpRequest" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
