import { Request,Response } from "express"


const login= (req:Request,res:Response)=>{
    const {name,email} = req.body;
    console.log('name--',name,"---email",email);
    if(!name || !email){
        res.status(404).json({
            message:"name and email are invalid"
        })
    }

    res.status(200).json({
        message:"inserted data sucessfully"
    })
   
}

export default login