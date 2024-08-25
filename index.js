const express = require("express");
require("../src/db/conn")
const app = express();
const MensRanking=require("../src/models/mens")
const port = process.env.PORT || 3000;
app.use(express.json());
app.get("/",async (req, res) => {
  res.send("Hello, World!");
});
//we will handle a post req
app.post("/mens",async(req,res)=>{

      try{
          const addingMensRecords=new MensRanking(req.body)
          console.log(req.body);
       await   addingMensRecords.save();
res.status(200).send("Yo you did it a");
      }catch(e){
        res.send(e);

      }
})
app.listen(port, () => {
  console.log("Server is running on port:", port);
});

//router .post se bhi same ho skat hai but router and express require hoga.
