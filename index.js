import Express from "express";
import cors from "cors"
import dotenv from "dotenv";
import dbconnection from "./DB/dbConnection.js";
import electronics from "./Routers/electroncisItems.js";
import clothing from "./Routers/clothingItems.js";
import homeAppliances from "./Routers/homeAppliances.js";

const server=Express();

dotenv.config();

server.use(Express.json());

//MiddleWare for cros orgin
server.use(cors());

//Port Number
const port=5000

//Db Connection
await dbconnection();

//Routers
server.use("/electronics",electronics);
server.use("/clothing",clothing);
server.use('/homeAppliances',homeAppliances);

server.listen(port,()=>{
    console.log("Server listening on the port: "+port)
})