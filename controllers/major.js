/*13 January, 2020
Teresa Costa*/

require('../public/javascript/generalFunctions.js')();

//lists all the tasks
exports.allTasks = function (req,res) {
    require('../models/taskModel.js').find().then((tasks) => {
        res.render('list-tasks',{ task: tasks });}).catch( (err) => console.log(err));
};

//lists all the tasks for today
exports.todayTasks = function (req,res){
    //finds today`s date
    let stringDate = todayDate();
    //finds the tasks for today`s date
    require('../models/taskModel.js').find({ date: stringDate }).then((tasks) => {
        res.render('dashboard',{task: tasks});}).catch( (err) => console.log(err));
};

//directs broken links to the home page
exports.brokenLinks = function (req, res) {
    //finds today`s date
    let stringDate = todayDate();
    //finds the tasks for today`s date
    require('../models/taskModel.js').find({ date: stringDate }).then((tasks) => {
        res.render('dashboard',{task: tasks});}).catch( (err) => console.log(err));
};