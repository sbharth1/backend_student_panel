import { Request,Response } from "express"


const login= (req:Request,res:Response)=>{
    const {email,password} = req.body;
    if(!password || !email){
        res.status(404).json({
            message:"email and password are invalid"
        })
    }

    

    res.status(200).json({
        message:"inserted data sucessfully"
    })
   
}

export default login