const mongoose= require('mongoose')

const hashtagSchema= new mongoose.Schema({
    tittle:{
        type:String,
        required:true
    },
    tweets:[
        {
            type: mongoose.Schema.Type.ObjectId,
            ref:"Tweet"
        }
    ]
},{timestamp:true})

const Hashtag= mongoose.model('Hashtag', hashtagSchema);

module.exports= Hashtag;