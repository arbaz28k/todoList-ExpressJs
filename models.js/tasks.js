const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    plan:{
        type:String,
        reuired:true,
    },

    time:{
        type:String,
        reuired:true,
    },

    date:{
        type:Date,
        reuired:true,
    },

    category:{
        type:String,
        reuired:true,
    },
});


const Task=mongoose.model('Task',taskSchema);

module.exports=Task;