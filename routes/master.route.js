import express from "express";
import { addFloor,getFloor } from "../controller/master.controller.js";

const router = express.Router();

router.get("/", getFloor);
router.post("/add", addFloor);

export default router;



/*


floor:1
departments:[
IT:{
    id:"",
    headName:"",
    heademail:"",
    headNumber:"",
    emplyecount:""
},
HR:{
    id:"",
    headName:"",
    heademail:"",
    headNumber:"",
    emplyecount:""
},
VP:{
    id:"",
    headName:"",
    heademail:"",
    headNumber:"",
    emplyecount:""
}

]



*/
