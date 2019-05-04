(function () {
    'use strict';

    angular
        .module('app')
        .service('AdminService', ['$http', adminservice]);

    function adminservice($http) { // ($http)
        var svc = this;
		
		console.log("service works!")

    }
})();