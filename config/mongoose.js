//require library
const mongoose=require('mongoose');

//connect to the database
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/todoList_db');



//aquire the connection (to check if connected successful)
const db=mongoose.connection;

//for error
db.on('error',console.error.bind(console,'error connecting to db'));

//show message when connected to the db
db.once('open',function(){
    console.log("successfully connected to the database");
});