const schedule = require('node-schedule');
const Alert = require('../models/Alert')
const searchEbay = require('../controllers/findItem');

function cron() {

    const twoMin = schedule.scheduleJob('*/2 * * * *', () => {
        SelectAlerts(2);
    });

    const tenMin = schedule.scheduleJob('*/10 * * * *', () => {
        SelectAlerts(10);
    });

    const thirtyMin = schedule.scheduleJob('*/30 * * * *', () => {
        SelectAlerts(30);
    });

    async function SelectAlerts(value) {
        const alert = await Alert.find({ "timer": value });
        for (let i = 0; i < alert.length; i++) {
            const key = alert[i].keyword;
            const mail = alert[i].email;
            const timer = alert[i].timer;
            searchEbay(key, mail, timer);
        }
    }
}

module.exports = cron;