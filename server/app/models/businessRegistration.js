/**
 * Created by christia on 2/20/2015.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var objectID = Schema.ObjectID;
var businessRegistationSchema = new Schema({

    accountDetails: {firstName: String, lastName:String, email: String, confirmEmail: String},
    businessDetails:{
        businessName:String,
        businessAddress:{addressLine1: String, addressLine2: String, city:String, state: String, zip: Number},
        timeZone: {type: String, default:'pacific' },
        phoneNumber:String

    },
    businessCategory: { category: String , subcategory: String},
    numberOfBranches: Number,
    webSiteDetails:{
        url: String

    },
    termsOfUse: Boolean

    // add more details later

});

module.exports = mongoose.model('businessRegistration',businessRegistationSchema);

