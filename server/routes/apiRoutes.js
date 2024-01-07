var express = require('express');
var router = express.Router();
const {protect} = require("../middleware/check-auth");

const {DailyTransactions,DailyTransactionsAll} = require("../controllers/dailyentryController")
const {OnlineSales,OnlineSalesYearly} = require("../controllers/dashboardController")
const {PersonsWithDue} = require("../controllers/khatabookController")



router.get('/online-sales/monthly/:id',protect,OnlineSalesYearly);
router.get('/online-sales/monthly/',protect,OnlineSales);

router.get('/PersonsWithDue',protect,PersonsWithDue);

router.post('/DailyTransactions',DailyTransactions);
router.get('/DailyTransactions/all',DailyTransactionsAll);


module.exports = router;
