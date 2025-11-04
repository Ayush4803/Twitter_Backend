const express= require('express')
const app= express();
const dotenv= require('dotenv')
const connect= require('./config/database')
const Tweet= require('./model/tweet')
dotenv.config();
app.get('/',(req,res)=>{
    res.send("Hello Ayush")
})
const PORT=process.env.PORT
app.listen(PORT,async ()=>{
  console.log(`Succesfully started the PORT at ${PORT}`)
  await connect()
  console.log("MONGODB CONNECTED")
  const tweet = await Tweet.create({
    content:"Hello I AM AYUSH KUMAR ",
    userEmail:"ayushkumar55528@gmail.com"
  });

})