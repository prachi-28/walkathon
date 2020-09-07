const CandidateSchema = require("../models/Candidate");
const mailer = require("./mailer");
const { Redshift } = require("aws-sdk");
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
            occupation: req.body.occupation,
            category: req.body.category,
            type: req.body.type,
        
    });
    let result = await candi.save();
    if (!result) {
        console.log(e);
        return res.status(200).send({
          msg: "An error occurred, please try again!",
          done: false,
        });
    }
        console.log(result);
        let obj = {
            "name": req.body.name,
            "email": (req.body.email).trim(),
            "cat": req.body.type
        }
        mailer.sendMail(obj);
        return res.status(200).send({
            msg: "Successfully Registered!",
            done: true
        })
    }
    catch (err) {
        console.log(err);
    }
}


module.exports = exp;