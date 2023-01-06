const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const objId = Schema.ObjectId;


const customerSchema = new Schema({
    customer_id:{type:String},
     customer_name :{type:String},
     email:{type:String},
     balance:{type:Number}
})

const customer_data = mongoose.model('customerData',customerSchema)

module.exports= customer_data;