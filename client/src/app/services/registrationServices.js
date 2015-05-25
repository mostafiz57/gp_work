
app.service('registrationServices', function ($http, $q) {
    var that = this;
    this.savePerson = function (bInfo) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            data :bInfo,
            url: 'registration'
        }).
         success(function (data, status, headers, config) {
             console.log('deferred.resolve(data.data): ' + data.data);
             deferred.resolve(data);
         }).
         error(function (data, status) {
             deferred.reject(data);
         });
        return deferred.promise;
    };
});

