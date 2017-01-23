var express = require('express');
var router = express.Router();
var septa = require('../septa-tools');

router.get('/', function(req, res, next) {
  septa.getAlerts('all', alerts => {
    res.render('alerts', { title: 'All Alerts', alerts: alerts });
  });
});

router.get('/regional-rail', function(req, res, next) {
  septa.getAlerts('rr_route', alerts => {
    res.render('alerts', { title: 'Regional Rail Alerts', alerts: alerts });
  });
});

module.exports = router;
