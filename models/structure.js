const mongoose = require("mongoose");

const Schema_Structure = new mongoose.Schema(

    {
        name: {
          type:String,
          required:true,
          maxLength : 100,  
        },
        description:{
            type:String,
            required:true,
            maxLength:500,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updatedAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Schema_Structure", Schema_Structure);