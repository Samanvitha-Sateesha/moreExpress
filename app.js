var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("home");
});
app.get("/fellinlovewith/:thing",function(req,res){
    var thing = req.params.thing;
    res.render("love",{thingvar:thing});
});
app.get("/posts",function(req,res){
    var posts = [
        {title: "hey! good work", author: "Sam"},
        {title: "but gotta be faster", author: "ram"},
        {title: "Colt loves rusty", author: "Colt"},
    ]

    res.render("posts",{posts:posts});
});
app.listen(3000,function(){
    console.log("Starting the server on port 3000");
});