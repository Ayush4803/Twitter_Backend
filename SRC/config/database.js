const mongoose= require('mongoose');

const connect = async()=>{
    await mongoose.connect('mongodb://localhost/twiter_Dev')
}
module.exports= connect;