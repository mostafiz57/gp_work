app.controller('groupWorkCtrl' ,[
		"$scope", '$location', "$rootScope", "registrationServices", function ($scope, $location, $rootScope, registrationService) {

		// Scope Variables
		$scope.description = 'Registration Data Save.';
		$scope.btnText ='Save';
		var clear_all ={
			first_name:'',
			last_name :'',
			business_email :'',
			confirm_email:'',
			business_name :'',
			business_address1 :'',
			business_address2 :'', 
			city:'',
			state :'',
			zip_code :'',
			phone:'',
			time_zone :''
		};

		$scope.StandardTimeZone = [
			{id:'1', val:'Morocco Standard Time	(GMT) Casablanca'},
		 	{id : '2' , val :'GMT Standard Time	(GMT) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London' },
		 	{id :'3' , val : 'Greenwich Standard Time	(GMT) Monrovia, Reykjavik' } ,
		 	{id : '4' , val : 'W. Europe Standard Time	(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna'} ,
		 	{id :'5' , val :  'Central Europe Standard Time	(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague' },
		 	{id :'6' , val : 'Romance Standard Time	(GMT+01:00) Brussels, Copenhagen, Madrid, Paris' } ,
		 	{id : '7' , val : 'W. Central Africa Standard Time	(GMT+01:00) West Central Africa'} ,
		 	{id :'8' , val :  'Central Europe Standard Time	(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague' }
		];

		$scope.State =[
		 	{id:'al', val:'Albama'},
		 	{id : 'as' , val :'Alaska' },
		 	{id :'ar' , val : 'Arizona' } ,
		 	{id : 'ca' , val : 'California'} ,
		 	{id :'ny' , val :  'New York' }
	 	];

		//Setting master data variable

		$scope.registration = {};
        $scope.registration = clear_all;

	 	$scope.saveORUpdateRegistrationInfo = function(){
	 		if(!$scope.businessForm.$invalid){
	 			registrationService.savePerson($scope.registration).then(function(response){
	 				var status = response.status;
	 				 if(status.substring(0,4) === 'OK00'){
                       alert("Save Successfull.");
	                       $scope.registration = null;
	       				 //$scope.registration = clear_all;
	 				 }else if(status.substring(0,4) === 'VL00'){
                      var vMsg = response.validation;
                      alert(vMsg.join('\n'));
	 				 }else if(status.substring(0,4) === 'VL00'){
	 				 	alert("Fail to save data.");
	 				 }
	 				 
	 			},function (error, status) {
                	console.log(status);
                	alert("Error in saving data\n Status:" + status + " Error: " + error.data);
            });

	 		}else{
	 			return;
	 		}

	 	};

    }
]);