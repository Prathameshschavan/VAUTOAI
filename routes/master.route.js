import express from "express";
import { addFloor,deleteFloor,getFloor, getHeadDetail } from "../controller/master.controller.js";

const router = express.Router();

router.get("/", getFloor);
router.post("/add", addFloor);
router.delete("/delete/:floor", deleteFloor);
router.get("/headDetail", getHeadDetail);

export default router;



/*


floor:1
departments:[
{
    id:"",
    DepartmentName:"",
    headName:"",
    heademail:"",
    headNumber:"",
    emplyecount:""
},
{
    id:"",
    headName:"",
    heademail:"",
    headNumber:"",
    emplyecount:""
},
{
    id:"",
    headName:"",
    heademail:"",
    headNumber:"",
    emplyecount:""
}

]



*/
