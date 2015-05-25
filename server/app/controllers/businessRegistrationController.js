
//var Hapi = require('hapi');
var validator = require('validator');

var BusinessRegistration = require('../models/businessRegistration');
var Tracker = require('../config/command');
//var BusinessProfile = require('../models/Business/businessProfile');

var submitRegistration =function (request, reply) {
    var jsonBusinessRegistration = request.body;
    var validation = [];
    var replyResult = {status:Tracker.statusCode.OK00};
    var tempjson = {
        account : {
            firstname:jsonBusinessRegistration.first_name, 
            lastname: jsonBusinessRegistration.last_name, 
            email:jsonBusinessRegistration.business_email, 
            confirmEmail:jsonBusinessRegistration.confirm_email
         },
        businessDetails : {
            businessAddress : {
                addressLine1 : jsonBusinessRegistration.business_address1, 
                addressLine2:jsonBusinessRegistration.business_address1, 
                city:jsonBusinessRegistration.city, 
                state:jsonBusinessRegistration.state, 
                zip:jsonBusinessRegistration.zip_code
            }
        }
        // add more things here.
    };
    if(validator.isNull(tempjson.businessDetails.businessAddress.city))
    {
        console.log('city is not provided. Mandaotry data not available.');
        validation.push('city is not provided. Mandaotry data not available.');
       // reply.json(validation);
    }

    if(validator.isNull(tempjson.businessDetails.businessAddress.zip))
    {
        console.log('zipcode is not provided. Mandaotry data not available.');
         validation.push('zipcode is not provided. Mandaotry data not available.');
        //return;
    }
    if(!validator.isNumeric(tempjson.businessDetails.businessAddress.zip)){
        console.log('Zipcode is not number');
        validation.push('Zipcode is not number.');
       // return;
    }

    if(validation.length >0){
        replyResult.status=Tracker.statusCode.VL00;
        replyResult.validation =validation;
        reply.json(replyResult);
        return false;
    }

    // Add more validation heER00
    var businessRegistration = new BusinessRegistration();
    businessRegistration.accountDetails.firstName = jsonBusinessRegistration.first_name;
    businessRegistration.accountDetails.lastName = jsonBusinessRegistration.last_name;
   

    businessRegistration.accountDetails.email = jsonBusinessRegistration.business_email;
    businessRegistration.accountDetails.confirmEmail = jsonBusinessRegistration.confirm_email

    businessRegistration.businessDetails.businessName = jsonBusinessRegistration.business_name;
    businessRegistration.businessDetails.businessAddress.addressLine1 = jsonBusinessRegistration.business_address1;
    businessRegistration.businessDetails.businessAddress.addressLine2 =  jsonBusinessRegistration.business_address2;
    businessRegistration.businessDetails.businessAddress.city = jsonBusinessRegistration.city;
    businessRegistration.businessDetails.businessAddress.zip = jsonBusinessRegistration.zip_code;
    businessRegistration.businessDetails.phoneNumber = jsonBusinessRegistration.phone;
    businessRegistration.businessDetails.timeZone = jsonBusinessRegistration.time_zone;
    businessRegistration.webSiteDetails = "http://www.aylin.co";
    businessRegistration.businessCategory.category = "Arts, crafts & collectibles"


    businessRegistration.businessCategory.subcategory = "Antiques";


    businessRegistration.save(function(err,result){
        if(err){
              console.log("Save fail------",err)
        }else{
             replyResult.status=Tracker.statusCode.OK00;
             reply.json(replyResult);
        }

        // when business registration information is saved
        // create a business profile but keep it in active
        // let business activate it later
        /*var businessProfile = new BusinessProfile();
        businessProfile.businessDetails = businessRegistration.businessDetails;
        businessProfile.accountDetails = businessRegistration.accountDetails;
        businessProfile.businessAddress = businessRegistration.businessAddress;
        businessProfile.webSiteDetails = businessRegistration.webSiteDetails;
        businessProfile.bankAccountDetails.bankAccountNumber = "1111111111111";
        businessProfile.bankAccountDetails.bankName = "wells fargo bank";
        businessProfile.geoLocation.lat = 44.56;
        businessProfile.geoLocation.long = -123.27;
        businessProfile.businessCategory = businessRegistration.businessCategory;
        businessProfile.save( function(err2, result2){
            reply("Result is" + result + "\n\n" + "Business Profile is:" +result2);
            return;
        });
*/


    })

    // at the same time create a business model and business entry in database
    // keep it inactive
    // activate it when user clicks on accept registraction link in email


}

module.exports = {
    submitRegistration : submitRegistration
}

