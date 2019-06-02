const mongoose = require('mongoose') ;
const roleSchema = mongoose.Schema(
    { name:{type:String },
      date: {type:String },
      status: {type:String },
    }
    ) ;
    module.exports = mongoose.model('Role' , roleSchema)