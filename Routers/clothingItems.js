import Express from "express";
import { db } from "../DB/dbConnection.js";

const clothing=Express.Router();

const clothingsItemCollection=db.collection("Clothing");

clothing.get("",async(req,res)=>{
    try{
        const data=await clothingsItemCollection.find({},{projection:{_id:0}}).toArray();
        res.send({data});

    }catch(e){
        res.status(500).send({ message: "Internal Server error", e });
    }
})

export default clothing;