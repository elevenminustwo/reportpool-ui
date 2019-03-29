(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdminController', ['$http', 'AdminService', admincontroller]);

    function admincontroller($http, AdminService) {
        var ctrl = this;
		
		(function () {
				console.log("controller works!")
        })();
    }

})();