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
    floorPrice: Number,
    volume: Number,
    volume24hours: Number,
    volume7days: Number,
    uniqueOwners: Number,
    supply: Number,
    likes: [likesSchema] // embedded schema
  })
 

module.exports = mongoose.model('Post', nftSchema);