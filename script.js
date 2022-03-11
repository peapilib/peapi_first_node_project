const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("views"));

const usernameDb = "asd@f.com";
const passwordDb = "123";

app.post("/login",(req,res)=>{
 const {username,password}=req.body;
 if(username == usernameDb && password==passwordDb){
  res.send('login success');
 }else{
  res.send('login failed');
 }

});


// const PORT = process.env.PORT || 3001;
app.listen(3000);