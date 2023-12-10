const express=require('express');
const router=express.Router();
const {createComment}=require('../Controller/commentController');
const {createPosts,getall}=require('../Controller/postController');
//const {getall}=require('../Controller/postController')
const {like,unlike}=require('../Controller/likeController');
router.post('/createComment',createComment);
router.post('/createPosts',createPosts);
 router.get('/getall',getall);
 router.post('/like',like);
 router.post('/unlike',unlike);
module.exports=router;
