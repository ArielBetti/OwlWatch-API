const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://owlwatch:dev123@owlwatch-odifs.gcp.mongodb.net/alerts?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;