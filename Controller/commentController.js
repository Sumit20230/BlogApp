const Post=require('../Models/postModel.js');
const comment =require('../Models/commentModel.js');
exports.createComment=async(req,res)=>{
try{
const {post,user,body}=req.body;
const newComment=new comment({post,user,body})
const saveComment=newComment.save();
const updatedPost= await Post.findByIdAndUpdate(post,{$push:{comment:(await saveComment)._id}},{new:true}).populate("comment").exec();
res.json({
    post:updatedPost,
})
}
catch(e)
{
    console.log(e);
    return res.status(500).json({error:"error while creating comment"});
}
};