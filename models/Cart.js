const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users',
    required:true
  },
  product:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Product',
    required:true
  },
  quantity:{
    type:Number,
    default:1
  },
}, { timestamps: true })

module.exports = mongoose.model('Cart', cartSchema);