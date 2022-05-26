const Post = require('../models/post');
const S3 = require('aws-sdk/clients/s3');
const { v4: uuidv4 } = require('uuid');

const s3 = new S3();

module.exports = {
    create,
    index,
    deletePost
}

function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        const filePath = `${uuidv4()}/${req.file.originalname}`
        const params = {Bucket: process.env.BUCKET_NAME, Key: filePath, Body: req.file.buffer};
        s3.upload(params, async function(err, data){
			console.log(err, ' from aws')
            const post = await Post.create({
                caption: req.body.caption,
                user: req.user,
                photoUrl: data.Location,
                name: req.body.name,
                floorPrice: req.body.floorPrice,
                volume: req.body.volume,
                volume24hours: req.body.volume24hours,
                volume7days: req.body.volume7days,
                uniqueOwners: req.body.uniqueOwners,
                supply: req.body.supply
            })
                
            console.log(post)
			// make sure the post we're sending back has the user populated
			await post.populate('user');
		
            res.status(201).json({post: post})
        })


    } catch(err){
        console.log(err)
        res.json({data: err})
    }
}

async function index(req, res){
    try {
        // this populates the user when you find the posts
        // so you'll have access to the users information 
        // when you fetch teh posts
        const posts = await Post.find({}).populate('user').exec()
        res.status(200).json({posts})
    } catch(err){

    }
}

async function deletePost(req, res) {
    try {
        const Post = await Post.findOneAndDelete({_id: req.params.id, user: req.user._id});
        console.log(Post, " <-= post in delete!")
        res.json({data: 'post removed'})
    } catch(err){
        res.status(400).json({err})
    }
    
}