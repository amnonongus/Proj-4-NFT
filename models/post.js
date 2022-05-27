const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})


const nftSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, 
    photoUrl: String,
    caption: String,
    name: String,
    floorPrice: Number,
    volume: Number,
    volume24hours: Number,
    volume7days: Number,
    uniqueOwners: Number,
    supply: Number,
    likes: [likesSchema] 
  })
 

module.exports = mongoose.model('Post', nftSchema);