const Schema_Structure = require("../models/structure");

const getRoute = async (req, res) =>{

    try{
        const info = await Schema_Structure.find({});

        res.status(200).json({
            success:true ,
            data : info,
            message : "All the data is fetched",
        });

    }
    catch(err){

        res.status(500).json(
        {
            success:false ,
            message : "Error",
        });
    }
}

module.exports = getRoute;