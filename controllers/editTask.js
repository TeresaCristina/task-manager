/*13 January, 2020
Teresa Costa*/

require('../public/javascript/generalFunctions.js')();
const taskModel = require('../models/taskModel.js');

//deletes an existing task
exports.deleteTask = function (req, res){
    taskModel.deleteOne({_id: req.params.id}).then(()=>{
        taskModel.find().then((tasks)=>{
            res.render('dashboard',{task: tasks});}).catch(err=>console.log(err));
  })
};

//shows details of an existing task
exports.showDetailsTask = function (req,res) {
    taskModel.findById(req.params.id).then((task)=>{
        let endsToday = [] , notendsToday = [];
        if (task.endsToday == "yes"){
            endsToday.push("checked");
            res.render('edit-task',{taskDocument: task, endsToday: endsToday});
        }
        else {
            notendsToday.push("checked");
            res.render('edit-task',{taskDocument: task, notendsToday: notendsToday});
        }
    }).catch( (err) => console.log(err));
};

//edits an existing task
exports.editDetailsTask = function (req,res) {
    
    taskModel.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
                        
        let stringDate = todayDate();
        require('../models/taskModel.js').find({date : stringDate}).then((tasks)=>{
            res.render('dashboard',{task: tasks});}).catch(err=>console.log(err));
    });     
};