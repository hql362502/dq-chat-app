const User = require("../model/userModel")
const bcrypt = require("bcrypt")
module.exports.register = async (req, res, next)=>{
    try{
        const {username, email, password} = req.body
        const usernameCheck = await User.findOne({username}) 
        if(usernameCheck){
            return res.json({msg: "用户名已存在", status: false})
        }
        const emailCheck = await User.findOne({email})
        if(emailCheck){
            return res.json({msg: "该邮箱已存在", status: false})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        })
        delete user.password
        return res.json({
            status: true,
            user
        })
    }
    catch(error){
        next(error)
    }
}
module.exports.login = async (req, res, next)=>{
    try{
        const {username, password} = req.body
        const user = await User.findOne({username}) 
        if(!user){
            return res.json({msg: "用户名不存在", status: false})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid)
            return res.json({msg: "密码错误", status: false})
        
        delete user.password
        return res.json({
            status: true,
            user
        })
    }
    catch(error){
        next(error)
    }
}
module.exports.setAvatar = async (req, res, next)=>{
    try{
        const userId = req.params.id
        const avatarImage = req.body.image
        const userData = await User.findByIdAndUpdate(userId, {
            isAvatarImageSet: true,
            avatarImage
        }) 
        return res.json({
            status: userData.isAvatarImageSet,
            image: userData.avatarImage
        })
    }
    catch(error){
        next(error)
    }
}
module.exports.getAllUsers = async (req, res, next)=>{
    try{
        const userId = req.params.id

        const userData = await User.find( { _id: { $ne: userId}}).select([
            "email",
            "username",
            "avatarImage",
            "_id"
        ])
            
        return res.json(userData)
    }
    catch(error){
        next(error)
    }
}