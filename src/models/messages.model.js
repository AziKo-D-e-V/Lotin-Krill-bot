const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema(
  {
    first_name: {
      type: "String",
    },
    last_name: {
      type: "String",
    },
    username: {
      type: "String",
    },
    user_id: {
      type: Number,
      required: true,
    },
    from_msg: {
      type: "String",
      required: true,
    },
    trans_msg: {
      type: "String",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("information", msgSchema);
