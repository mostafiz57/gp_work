angular.module('templates-app', ['views/templates/registration.tpl.html']);

angular.module("views/templates/registration.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/templates/registration.tpl.html",
    "<div class=\"container\">\n" +
    "   \n" +
    "   <!-- start: User Table -->\n" +
    "\n" +
    "   <div class=\"row\">\n" +
    "    <div style=\"height:58px\">\n" +
    "        \n" +
    "    </div>\n" +
    "       \n" +
    "   </div>\n" +
    "\n" +
    "<div class=\"heading-bar\" style=\"text-align:center\">\n" +
    "    <h3>Tell us about your business</h3>\n" +
    "    <span class=\"h-line\"></span>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "<div class=\"col-md-12\">\n" +
    "<form name=\"businessForm\" novalidate>\n" +
    "    <div class=\"col-sm-12 margin-top10\">\n" +
    "        <div class=\"control-group col-sm-6\" ng-class=\"{true: 'has-error'}[submitted && businessForm.first_name.$invalid]\">\n" +
    "            <label class=\"col-sm-4\">First Name </label>\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <input type=\"text\" name=\"first_name\" class=\"form-control\" ng-model=\"registration.first_name\" required>\n" +
    "                <p class=\"help-block\" ng-show=\"submitted && businessForm.first_name.$error.required\">Your first name is required.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-group col-sm-6\" ng-class=\"{true: 'has-error'}[submitted && businessForm.last_name.$invalid]\">\n" +
    "            <label class=\"col-sm-4\">Last Name </label>\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <input type=\"text\" id=\"last_name\" name=\"last_name\" class=\"form-control\" ng-model=\"registration.last_name\" required>\n" +
    "                <p class=\"help-block\" ng-show=\"submitted && businessForm.last_name.$error.required\">Your last name is required.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-12 margin-top10\">\n" +
    "        <div class=\"control-group col-sm-6\" ng-class=\"{true: 'has-error'}[submitted && businessForm.business_email.$invalid]\">\n" +
    "            <label class=\"col-sm-4\">Email</label>\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <input type=\"email\" name=\"business_email\" class=\"form-control\" ng-model=\"registration.business_email\" required>\n" +
    "                <p class=\"help-block\" ng-show=\"submitted && businessForm.business_email.$error.required\">Your email is required.</p>\n" +
    "                 <p class=\"help-block\" ng-show=\"businessForm.business_email.$invalid && !business_email.business_email.$pristine && submitted\">Enter valid email.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-group col-sm-6\" ng-class=\"{true: 'has-error'}[submitted && businessForm.confirm_email.$invalid]\">\n" +
    "            <label class=\"col-sm-4\">Confirm Email</label>\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <input type=\"email\"  name=\"confirm_email\" class=\"form-control\" ng-model=\"registration.confirm_email\" \n" +
    "                ng-match=\"business_email\" required match=\"registration.business_email\">\n" +
    "                <p class=\"help-block\" ng-show=\"submitted && businessForm.confirm_email.$error.required\">Confirm email is required.</p>\n" +
    "                 <p class=\"help-block\" ng-show=\"businessForm.confirm_email.$invalid && !confirm_email.$pristine && submitted\">Enter valid email.</p>\n" +
    "                  <span class=\"help-block has-error\" style=\"color:#a94442\" ng-show=\"businessForm.confirm_email.$error.mismatch\">Email and Confirm Email must match.</span></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-12 margin-top10\">\n" +
    "            <div class=\"form-group\" ng-class=\"{true: 'has-error'}[submitted && businessForm.business_name.$invalid]\">\n" +
    "                <label class=\"col-sm-2\">Business Name</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                     <input type=\"text\"  name=\"business_name\" class=\"form-control\" ng-model=\"registration.business_name\" required>\n" +
    "                      <p class=\"help-block\" ng-show=\"submitted && businessForm.business_name.$error.required\">Business name is required.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-12 margin-top10\">\n" +
    "            <div class=\"form-group\" ng-class=\"{true: 'has-error'}[submitted && businessForm.business_address1.$invalid]\">\n" +
    "                <label class=\"col-sm-2\"> Business Address Line1</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                     <input type=\"text\"  name=\"business_address1\" class=\"form-control\" ng-model=\"registration.business_address1\" required>\n" +
    "                      <p class=\"help-block\" ng-show=\"submitted && businessForm.business_address1.$error.required\">Business address line1 is required.</p>\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-12 margin-top10\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"col-sm-2\"> Business Address Line2</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                     <input type=\"text\"  name=\"business_address2\" class=\"form-control\" ng-model=\"registration.business_address2\" >\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"col-sm-12 margin-top10\">\n" +
    "        <div class=\"control-group col-sm-6\" ng-class=\"{true: 'has-error'}[submitted && businessForm.city.$invalid]\">\n" +
    "            <label class=\"col-sm-4\">City </label>\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <input type=\"text\" name=\"city\" class=\"form-control\" ng-model=\"registration.city\" required>\n" +
    "                <p class=\"help-block\" ng-show=\"submitted && businessForm.city.$error.required\">City is required.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-group col-sm-6\" ng-class=\"{true: 'has-error'}[submitted && businessForm.state.$invalid]\">\n" +
    "            <label class=\"col-sm-4\">State</label>\n" +
    "            <div class=\"col-sm-7\">\n" +
    "               <select class=\"form-control search-select\" name=\"state\" ng-model=\"registration.state\"  required>    \n" +
    "                        <option value=\"\">-- Select State --</option>\n" +
    "                        <option ng-repeat=\"stz in State\" value=\"{{stz.id}}\"> {{stz.val}}</option>\n" +
    "                    </select>\n" +
    "                <span class=\"help-block\" ng-show=\"businessForm.state.$error.required\">State is required</span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-12 margin-top10\">\n" +
    "        <div class=\"control-group col-sm-6\" ng-class=\"{true: 'has-error'}[submitted && businessForm.zip_code.$invalid]\">\n" +
    "            <label class=\"col-sm-4\">Zip Code </label>\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <input type=\"text\" name=\"zip_code\" class=\"form-control\" ng-model=\"registration.zip_code\" required>\n" +
    "                <p class=\"help-block\" ng-show=\"submitted && businessForm.zip_code.$error.required\">Zip Code is required.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"control-group col-sm-6\" ng-class=\"{true: 'has-error'}[submitted && businessForm.phone.$invalid]\">\n" +
    "            <label class=\"col-sm-4\">Phone</label>\n" +
    "            <div class=\"col-sm-7\">\n" +
    "                <input type=\"text\" id=\"phone\" name=\"phone\" class=\"form-control\" ng-model=\"registration.phone\" required>\n" +
    "                <p class=\"help-block\" ng-show=\"submitted && businessForm.phone.$error.required\">Phone is required.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "     <div class=\"col-sm-12 margin-top10\">\n" +
    "            <div class=\"form-group\" ng-class=\"{true: 'has-error'}[submitted && businessForm.time_zone.$invalid]\">\n" +
    "                <label class=\"col-sm-2\"> Time zone</label>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <select class=\"form-control search-select\" name=\"time_zone\" ng-model=\"registration\n" +
    "                    .time_zone\"  required>    \n" +
    "                        <option value=\"\">-- Select Time zone --</option>\n" +
    "                        <option ng-repeat=\"stz in StandardTimeZone\" value=\"{{stz.id}}\"> {{stz.val}}</option>\n" +
    "                    </select>\n" +
    "                    <span class=\"help-block\" ng-show=\"businessForm.time_zone.$error.required\">Time zone is required</span>\n" +
    "\n" +
    "                </div>\n" +
    "                <div class=\"col-sm-4\"></div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "           \n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-sm-12\" style=\"margin-top:20px\">\n" +
    "         <label class=\"col-sm-3 control-label\"></label>\n" +
    "        <div class=\"form-group\" class=\"col-sm-5\">\n" +
    "         <button type=\"submit\" class=\"btn btn-primary col-sm-2\"   data-ng-click=\"submitted=true;saveORUpdateRegistrationInfo()\">{{btnText}}</button>\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</form>\n" +
    "\n" +
    "</div>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
