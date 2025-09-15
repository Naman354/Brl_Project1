const Schema_Structure = require("../models/structure");

const deleteRoute = async (req, res) => {

    try{
        const {id} = req.params;

        await Schema_Structure.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Route Deleted",
        });
            
    }

    catch(err){

        res.status(500).json({
            success:false,
            message:"Error"
        });

    }

}

module.exports = deleteRoute;
