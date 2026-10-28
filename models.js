import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: True,
  },
  password: {
    type: String,
    required: True,
  },
  balance: {
    type: Number,
    default: 0,
  },
});

const marketSchema = new Schema({
  name: {
    type: String,
    required: True,
  },
  initialWager: {
    type: Number,
    required: True,
  },
  expiry: {
    type: Date,
    required: True,
  },
  bet: {
    type: String,
    enum: ["YES", "NO"],
    default: "YES",
  },
  adminId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  resolution: {
    type: String,
    enum: ["Unresolved", "Won", "Lost"],
    default: "Unresolved",
  },
});

const betSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  marketId: {
    type: Schema.Types.ObjectId,
    ref: "Market",
  },
  amount: {
    type: Number,
    required: True,
  },
});

export const User = model("User", userSchema);
export const Market = model("Market", marketSchema);
export const Bet = model("Bet", betSchema);
