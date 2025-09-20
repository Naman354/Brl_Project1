const Schema_Structure = require("../models/structure");

const patchRoute = async (req, res) => {
    try{
        const {id} = req.params;
        const {name, description} = req.body;
        
        const updates={};
        if (typeof name !== "undefined") updates.name=name;
        if (typeof description !== "undefined") updates.description=description;

        updates.updatedAt = Date.now();

        const patch = await Schema_Structure.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        });

        
        
        res.status(200).json({
            success:true,
            data : patch,
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
module.exports = patchRoute;