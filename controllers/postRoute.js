const Schema_Structure = require("../models/structure");

const postRoute = async (req, res) => {
    console.log(req.body)
    try{
        const {name, description} = req.body;
        const response = await Schema_Structure.create({name , description});

        res.status(200).json({
            success:true, 
            data:response,
            message : "New Data Added",
        });
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message :"Error",
        });
    }

}


module.exports = postRoute;