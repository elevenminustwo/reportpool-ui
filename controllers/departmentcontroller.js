(function () {
    'use strict';

    angular
        .module('app')
        .controller('DepartmentController', ['$http','$scope','$element','$window',departmentcontroller]);

    function departmentcontroller($http,$scope,$element,$window) {
        var ctrl = this;
		var departmentId = null;
        var unitId = null;
        
        var req = {
            method: 'GET',
            url: "http://localhost:8080/api/getDepartments",
            headers: {
              'Authorization': 'Bearer ' + $window.localStorage.getItem('reportpooltoken')
            }
           };
		
        (function () {
            $http(req)
                .then(function successCallback(response) {
                    ctrl.departments = response.data;
                    },
                    function errorCallback(response) {
                        alert(response);
                    });
        })();
		
		ctrl.getDepartments = getDepartments;
		function getDepartments(){
			$http(req)
                .then(function successCallback(response) {
                    ctrl.departments = response.data;
                    },
                    function errorCallback(response) {
                        alert(response);
                    });
		}
		ctrl.getDepartmentUnits = getDepartmentUnits;
		function getDepartmentUnits(id){
			var data = {
				departmentId:id,
			};
			$http.post("http://localhost:8080/api/getDepartmentUnits", JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + $window.localStorage.getItem('reportpooltoken')
				},
            })
                    .then(function successCallback(response) {
					ctrl.units = response.data;
                    },
                        function errorCallback(response) {
                            alert(response);
                        });
		}
		
		ctrl.unitmodal= unitmodal;
		function unitmodal(id){
			departmentId=id;
			ctrl.getDepartmentUnits(id);
            $('#unitaddmodal').modal('show');
		}
		
		ctrl.delUnit = delUnit;
		function delUnit(id){
			var data = {
				departmentId:departmentId,
				unitId:id,
			};
			$http.post("http://localhost:8080/api/delUnit", JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + $window.localStorage.getItem('reportpooltoken')
				},
            })
                    .then(function successCallback(response) {
					ctrl.getDepartmentUnits(departmentId);
                    },
                        function errorCallback(response) {
                            alert(response);
                        });
		}
		
		ctrl.addUnit=addUnit;
		function addUnit(ad){
			var data = {
				depId:departmentId,
				name:ad,
			};
			$http.post("http://localhost:8080/api/addUnit", JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + $window.localStorage.getItem('reportpooltoken')
				},
            })
                    .then(function successCallback(response) {
					ctrl.getDepartmentUnits(departmentId);
                    },
                        function errorCallback(response) {
                            alert(response);
                        });
		
		}
		ctrl.departmentmodal= departmentmodal;
		function departmentmodal(){
            $('#departmentaddmodal').modal('show');
		}
		
		ctrl.addDepartment = addDepartment;
		function addDepartment(ad){
			var data = {
				name:ad,
			};
			$http.post("http://localhost:8080/api/addDepartment", JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + $window.localStorage.getItem('reportpooltoken')
				},
            })
                    .then(function successCallback(response) {
                       ctrl.getDepartments();
                    },
                        function errorCallback(response) {
                            alert(response);
                        });
		}
		ctrl.delDepartment = delDepartment;
		function delDepartment(id){
			var data = {
				departmentId:id,
			};
				$http.post("http://localhost:8080/api/delDepartment", JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json',
							'Authorization': 'Bearer ' + $window.localStorage.getItem('reportpooltoken')
				},
				})
                    .then(function successCallback(response) {
					ctrl.getDepartments();
                    },
                        function errorCallback(response) {
                            alert(response);
                        });
			
		}

	}
})();