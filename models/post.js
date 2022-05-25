const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

// A post has many likes, a like belongs to a POST
const nftSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
    photoUrl: String,
    caption: String,
    name: String,
    FloorPrice: Number,
    Volume: Number,
    Volume24hours: Number,
    Volume7days: Number,
    UniqueOwners: Number,
    Supply: Number,
    likes: [likesSchema] // embedded schema
  })
 

module.exports = mongoose.model('Post', nftSchema);