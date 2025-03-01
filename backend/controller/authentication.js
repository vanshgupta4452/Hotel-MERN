const {  verifyToken }= require("../service/authentication")

function checkForAuthCookie(cookiename){
   return (req,res,next)=>{
       const cookiesValue= req.cookies[cookiename]
       
       if(!cookiesValue) return next()

       try {
         const user=verifyToken(cookiesValue)
         req.user=user
       } catch (error) {
        return next()
       }
       return next()
   }
  
}

module.exports={
  checkForAuthCookie
}