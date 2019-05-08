(function (token) {
    'use strict';

    angular
        .module('app')
        .controller('DepartmentController', ['$http','$scope','$element',departmentcontroller]);

    function departmentcontroller($http,$scope,$element) {
        var ctrl = this;
		var departmentId = null;
        var unitId = null;
        
        var req = {
            method: 'GET',
            url: "http://localhost:8080/api/getDepartments",
            headers: {
              'Authorization': 'Bearer ' + token
            }
           }
		
        (function () {
            $http(req)
                .then(function successCallback(response) {
                    ctrl.departments = response.data;
                    },
                    function errorCallback(response) {
                        alert(response);
                    });
        })();
		
		ctrl.unitadd= unitadd;
		function unitadd(id){
			departmentId=id;
            $('#unitaddmodal').modal('show');
		}
		

	}
})();