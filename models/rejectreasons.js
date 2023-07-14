const mongoose = require('mongoose');
const { route } = require('../routes/userRoute');


const rejectreaons = mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "driver", 
        require: true
    }, 
    reasons: {
        type: String
    }
})

const rejectReasos = mongoose.model('rejectreaon', rejectreaons);

module.exports = rejectReasos