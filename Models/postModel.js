const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
title:{
    type:String,
    require:true,
},
like:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Like'
}],
comment:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'comment'
}]

});
module.exports=mongoose.model('Post',userSchema);