const express=require('express');
const path=require('path');
const port=8000;

//connect database
const db=require('./config/mongoose');
const Task=require('./models.js/tasks');

app=express();

//set directory
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:false}));
app.use(express.static('assets'));


var schdulelist=[
    {
      plan:"",
      time:"",  
      date:"", 
      category:"",  
    },

    {
        plan:"",
        time:"", 
        date:"", 
        category:"", 
    },
];

//fetcing details from db using get request
app.get('/',function(req,res){

    Task.find({},function(err, tasks){
        if(err){
            console.log('error in fetching tasks from bd');
            return;
        }

        return res.render('views',{
            title:"TODO List",
            schduleList:tasks,
        });

    });

});


app.post('/create-contact',function(req,res){

    Task.create({
        plan:req.body.plan,
        time:req.body.time,
        date:req.body.date,
        category:req.body.category,
    },function(err,newTask){

        if(err){
            console.log('error in connecting the task')
            return;
        }
        console.log('****',newTask)
        return res.redirect('back');
    });
});


//for deleting the content
app.get('/delete-content/', function(req,res){

    //getting id from the query in the url
    let id=req.query.id;

    //delete the task using id and delete it

    Task.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting the task from db');
            return;
        }

        return res.redirect('back');
    });

});


app.listen(port,function(err){
    if(err){
        console.log(`there is an errorr: ${err}`);
    }
    console.log(`the server is up and running at port: ${port}`);
});