const jwt=require('jsonwebtoken')

const authenticate=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1]
        const decode=jwt.verify(token,'verySecretpass')

        req.user=decode
        next()
    }
    catch(error)
    {
        res.status(401).json({
            message:error.message
        })
    }
}

const roleauthenticate=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(' ')[1]
        const decode=jwt.verify(token,'verySecretpass')
        req.user=decode
        const roller=req.user.role
        if(roller==="admin"){
            next()
        }
    }
    catch(error)
    {
        res.status(401).json({
            message:error.message
        })
    }
}

module.exports={authenticate,roleauthenticate}