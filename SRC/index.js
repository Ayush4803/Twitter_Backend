const express= require('express')
const app= express();
const dotenv= require('dotenv')
<<<<<<< HEAD
const connect= require('./config/database')
const Tweet= require('./model/tweet')
=======
>>>>>>> 57d39efb4bc57fbfff6a3dcc2e7806a01a105306
dotenv.config();
app.get('/',(req,res)=>{
    res.send("Hello Ayush")
})
const PORT=process.env.PORT
<<<<<<< HEAD
app.listen(PORT,async ()=>{
  console.log(`Succesfully started the PORT at ${PORT}`)
  await connect()
  console.log("MONGODB CONNECTED")
  const tweet = await Tweet.create({
    content:"Hello I AM AYUSH KUMAR ",
    userEmail:"ayushkumar55528@gmail.com"
  });

=======
app.listen(PORT,()=>{
  console.log(`Succesfully started the PORT at ${PORT}`)
>>>>>>> 57d39efb4bc57fbfff6a3dcc2e7806a01a105306
})