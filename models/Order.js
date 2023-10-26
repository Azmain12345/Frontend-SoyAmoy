
import {model, models, Schema} from "mongoose";

// Define the Order schema
const OrderSchema = new Schema({
  line_items:Object,
  name:String,
  email:String,
  city:String,
  postalCode:String,
  streetAddress:String,
  country:String,
  paid:Boolean,
}, {
  timestamps: true,
});

// Create the Order model using the schema
export const Order = models?.Order || model('Order', OrderSchema);