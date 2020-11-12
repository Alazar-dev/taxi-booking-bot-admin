const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    user_Id:{
        type: Number
    },
    first_name:{
        type: String,
        required: [true, 'First Name field is required']
    },
    last_name:{
        type: String,
        required: [true, 'Last Name field is required']
    },
    phone_number: {
        type: Number
        },
    coordinates: {
        type:{
                type: String,
                default: "Point"
            },
        
            longtiude:{
                type: Number
            },
            latitude:{
                type: Number
            }
    }

});

const Customer = mongoose.model('user', userSchema);
module.exports = Customer;