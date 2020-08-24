const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const helprequestSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    description: String,
    city: String,
    helpMessages: [
      {
        sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        senderTel: String,
        senderEmail: String,
        message: String,
      },
    ],
  },
  {
    timeStamps: true,
  }
);

const HelpRequest = mongoose.model("HelpRequest", helprequestSchema);
module.exports = HelpRequest;
