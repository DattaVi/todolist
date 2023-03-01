const express=require("express");
const bodyParser=require("body-parser");
const app=express();
var item="";
var items=[];
var witems=[];
var i=0,j=0;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
app.get("/",function(req,res){
   const day=new Date();
   var options={
    weekday:"long",
    month:"long",
    day:"numeric"
   }
   const str=day.toLocaleDateString("en-US",options);

   res.render("list",{presentDay:str,listItem:items});
})


app.post("/",function(req,res){
    if(req.body.button=="Work"){
        witems[j]=req.body.newItem;
        res.redirect("/work");
    j++;
    }
    else{
    items[i]=req.body.newItem;
    i++;
    res.redirect("/");
    }
    
})

app.get("/work",function(req,res){
    
   // var h="Works"
       res.render("list",{presentDay:"Work list",listItem:witems});
})
app.post("/work",function(req,res){
    
    witems[j]=req.body.newItem;
    j++;
    res.redirect("/work");
})





app.listen(3000,function(){
    console.log("server is running on port 3000");
})