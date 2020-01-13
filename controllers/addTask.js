/*13 January, 2020
Teresa Costa*/

const task = require('../models/taskModel.js');

exports.addTask = function (req, res) {
    
    let errors = [];

    if (req.body.title == ""){
        errors.push("You must enter a Task !");
        res.render('add-task', {
            error: errors
        });
    }
    else {
        
        //model for the task
        const newTask = new task({
            title: req.body.title,
            date: req.body.date,
            time: req.body.time,
            endsToday: req.body.endsToday        
        });
        
        newTask.save();
        res.redirect('/');
    }
};