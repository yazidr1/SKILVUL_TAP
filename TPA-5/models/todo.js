const mongoose = require('mongoose');
const { Schema } = mongoose

const todoSchema = new Schema({
  name: String,
  isComplete: Boolean,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo