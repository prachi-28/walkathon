const CandidateSchema = require("../models/Candidate")

let exp = {};

exp.add = async(req,res) => {
    try
    {
        console.log(req.body)
        const candi = new CandidateSchema({
            name: (req.body.name).trim(),
            contact: req.body.contact,
            email: (req.body.email).trim(),
            address: req.body.address,
            state: req.body.state,
            country: req.body.country,
            occup: req.body.occupation,
            category: req.body.category,
            type: req.body.type,
        
    });
    let result = await candi.save();
    if (!result) {
        console.log(e);
        return res.send("Error in inserting.");
    }
        console.log(result);
        //MAILER
        
        return res.send("User Added!")
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = exp;