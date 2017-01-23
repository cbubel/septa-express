var request = require('request');

module.exports.getAlerts = function(type, giveback) {
    request('http://www3.septa.org/hackathon/Alerts/get_alert_data.php?req1=all', (error, response, body) => {
        if(!error && response.statusCode === 200) {
            var alerts = JSON.parse(body);
            if(type === 'all') return giveback(alerts);

            var result = [];

            for(var a of alerts) {
                if(a.route_id.includes(type)) result.push(a);
            }

            giveback(result);
        }
    });
}