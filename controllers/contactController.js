const ContactModel = require('../model/ContactModel');

exports.postContact = async(req,res)=>{
    console.log(req.body)
    try {
        const {name , email , phone} = req.body
        //chek 1 : if fields 
        if (!name|| !email|| !phone ){
            return res.status(400).json({msg:"All Fields Requierd!"})
        }
        //check if email already exist
        const contact = await ContactModel.findOne({email:email})
        if (contact){
            return res.status(400).json({msg:"Contact Already Exist!"})
        }
        const newContact = new ContactModel({...req.body})
        await newContact.save()

        return res.status(200).send({msg:"Contact Created with Success."})
    
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"Server error"})
    }
}


exports.getContacts = async(req,res)=>{
    try {
        const contacts = await ContactModel.find({});
        return res.status(200).send({msg:"Get Contact With Success." , response : contacts})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"Get Contacts Server error"})
        

    }

}

exports.getContactById = async(req,res)=>{
    try {
        const {id} = req.params
        const contact = await ContactModel.findById(id);
        return res.status(200).send({msg:"Get Contact By ID With Success." , response : contact})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"Get Contacts Server error"})
        

    }

}


exports.deleteContact = async(req,res)=>{
    try {
        const {id} = req.params
            await ContactModel.deleteOne({_id:id});
        return res.status(200).send({msg:"Delete Contact  By ID With Success."})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"Get Contacts Server error"})
        

    }

}

exports.updateContact = async(req,res)=>{
    try {
        const {id} = req.params
            await ContactModel.deleteOne({_id:id});
        return res.status(200).send({msg:"update Contact  By ID With Success."})
    } catch (error) {
        console.log(error)
        return res.status(500).send({msg:"update Contacts Server error"})
        

    }

}

