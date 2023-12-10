const Post=require('../Models/postModel.js');
exports.createPosts=async(req,res)=>{
try{
  const {title,body}=req.body;
  const newPost= new Post({body,title});
  const postsaved= await newPost.save();
  res.json({
    Post:postsaved
  })
}
catch(e)
{
console.log(e);
res.status(404).send({
    message:"error occured"
})
}
}
exports.getall=async (req,res)=>{
    try{
const posts= await Post.find();
res.json({
    posts
})
    }
    catch(e){
        console.log(e);
    }

}