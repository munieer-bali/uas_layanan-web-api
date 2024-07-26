// import { json } from "body-parser";
import Akun from "../models/SimpanModel.js";

export const getAkuns =  async(req,  res)=>{
    try {
        const response = await Akun.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }

}

//getakuns by id

export const getAkunsById =  async(req,  res)=>{
    try {
        const response = await Akun.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }

}

// crete akuns 

export const createAkuns =  async(req,  res)=>{
    try {
        await Akun.create(req.body);
        res.status(201).json({msg:"akuns creted....."});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }

}

//update akuns

export const updateAkuns =  async(req, res)=> {
    try {
       await Akun.update(req.body, {
         where: {
            id: req.params.id
         }
       })
        res.status(200).json({msg:"akun updated..."});
    } catch (error) {
        console.log(error.message);
    }
}

//deleete akuns

export const deleteAkuns =  async(req, res) => {

    try {
        await Akun.destroy( {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({msg:"delete akuns...."})
    } catch (error) {
        console.log(error.message);
    }
}
