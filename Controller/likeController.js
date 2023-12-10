const Post=require('../Models/postModel.js');
const Like=require('../Models/likeModel');
exports.like=async(req,res)=>{
    try{
    const {post,user}=req.body;
    const newLike= new Like({post,user});
    const savedLike=await newLike.save();
    const updatedPost=await Post.findByIdAndUpdate(post,{$push:{like:savedLike._id}},{new:true});
    res.json({post:updatedPost});
    }
    catch(e){
        console.log(e);
    }

}
exports.unlike=async(req,res)=>{
    try{
    const {post,like}=req.body;
    const deletedLike= await Like.findOneAndDelete({post:post,_id:like});
    const updatedPost=await Post.findByIdAnddelete(post,{$pull:{like:deletedLike._id}},{new:true});
res.json({
    post:updatedPost
})   
}
    catch(e){
        console.log(e);
    }

}