import Express from "express";
import { db } from "../DB/dbConnection.js";

const electronics=Express.Router();

const electronicsItemCollection=db.collection("ElectronicsItems");

electronics.get("",async(req,res)=>{
    try{
        const data=await electronicsItemCollection.find({},{projection:{_id:0}}).toArray();
        res.send({data});

    }catch(e){
        res.status(500).send({ message: "Internal Server error", e });
    }
})

export default electronics;