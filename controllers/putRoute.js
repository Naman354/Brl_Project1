const Schema_Structure = require("../models/structure");

const putRoute = async (req, res) => {

    try{
        const {id} = req.params;
        const {name, description} = req.body;

        const put = await Schema_Structure.findByIdAndUpdate(id,
        {name , description, updatedAt:Date.now()},{
            new: true,
            runValidators:true
        }
        );

        res.status(200).json({
            success:true,
            data : put,
            message : "Data Updated"
        });

    }

    catch(err){
        res.status(500).json({
            success:false,
            message:"Error",
        });
    }

}

module.exports = putRoute;