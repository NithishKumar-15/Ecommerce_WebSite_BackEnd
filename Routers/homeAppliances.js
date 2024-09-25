import Express from "express";
import { db } from "../DB/dbConnection.js";

const homeAppliances=Express.Router();

const HomeAppliancesItemCollection=db.collection("HomeAppliances");

homeAppliances.get("",async(req,res)=>{
    try{
        const data=await HomeAppliancesItemCollection.find({},{projection:{_id:0}}).toArray();
        res.send({data});

    }catch(e){
        res.status(500).send({ message: "Internal Server error", e });
    }
})

export default homeAppliances;