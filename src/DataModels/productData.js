const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
const objId = Schema.ObjectId;


const productSchema = new Schema({
    Product_id :{type : String},
     Product_type : {type:String},
      Product_name : {type: String},
       Product_price : {type : Number},
        Available_quantity:{type:Number}
})

const product_data = mongoose.model('productAvl',productSchema)

module.exports= product_data;