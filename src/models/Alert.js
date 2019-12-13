const mongoose = require('../database/db');

const AlertSchema = new mongoose.Schema({

    email: {
        type : String,
        require : true
    },
    
    keyword : {
        type : String,
        require: true
    },

    timer : {
        type : Number,
        require: true
    },

    alertID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Alert',
        auto: true
    }
},
);

const Alert = mongoose.model('Alert', AlertSchema);

module.exports = Alert;