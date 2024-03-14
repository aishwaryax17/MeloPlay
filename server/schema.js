const mongoose = require('mongoose')

const MeloPlay = new mongoose.Schema({
    username : {
        type : String
    },
    password : {
        type : String
    },
    email:{
        type:String
    },
    title:{
        type:String
    },
    lyrics:{
        type:String
    },
    mp3file:{
        type:String
    }
})

const musixvar = mongoose.model('MeloDB',  MeloPlay)

module.exports = { musixvar }