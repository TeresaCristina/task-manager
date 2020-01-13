/*13 January, 2020
Teresa Costa*/

const router = require('express').Router();
const general = require('../controllers/major');

//main page
router.get('/', general.todayTasks);
router.use('/', general.brokenLinks);


//lists the products
router.get('/list-tasks', general.allTasks);

module.exports = router;