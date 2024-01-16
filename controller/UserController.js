import prisma from "../db/dbconfig.js"

export const createUser = async(req,res) => {
  const {username,email,password} = req.body
  const findUser = await prisma.user.findUniqueOrThrow({
    where:{
        email:email
    }
  })
  if(findUser){
    return res.json({status:400,message:"Email Already Taken . Please another email."});
  }
  const newUser = await prisma.user.create({
    data:{
     username:username,
     email:email,
     password:password
    }
  })
  return res.json({status:200,data:newUser,message:"User created."})

}