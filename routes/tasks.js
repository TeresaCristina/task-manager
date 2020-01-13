/*13 January, 2020
Teresa Costa*/

const router = require('express').Router();
const add = require('../controllers/addTask.js');
const edit = require('../controllers/editTask');

//add a task
router.get('/add-task',(req,res)=> {res.render('add-task');});
router.post('/add-task', add.addTask);

//edits a task
router.get('/edit-task/:id', edit.showDetailsTask);
router.put('/edit-task/:id', edit.editDetailsTask);

//deletes a task
router.delete('/deleteTask/:id', edit.deleteTask);

module.exports = router;