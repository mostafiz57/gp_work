
var bRegistration = require('./controllers/businessRegistrationController');



    module.exports = function(app) {  
   		 app.post('/registration',bRegistration.submitRegistration);
    }

