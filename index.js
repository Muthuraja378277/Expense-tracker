const express = require('express')
const app = express()

const static =  express.static("static");
app.use("/",static);

app.get("/hi",(req,res)=>{
   console.log(req.query);
   res.json({
     
      name:req.query.name,
      description:req.query.description,
      i_date:req.query.i_date,
      amount:req.query.amount





   });
   

})
// app.get('/', function (req, res) {
//  // res.send('Hello World')
//  res.json({
//     name:"Muthu"
//  });
// });

app.listen(3000,()=>{
   console.log("app runing");
   console.log("hi everyone")
});