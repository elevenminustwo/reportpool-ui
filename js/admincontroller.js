(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdminController', ['$http','$scope', '$element', 'AdminService', admincontroller]);

    function admincontroller($http,$scope,$element,AdminService) {
        var ctrl = this;
		
		(function () {
				console.log("controller works!")
        })();
		
		$(document).on("click", ".open-dunitModal", function () {
        ctrl.id = $(this).data('id');
        ctrl.getDepartments();
        $('#dunitModal').modal('show');
        });
		
		ctrl.getDepartments=getDepartments;
		function getDepartments(){

                    var req = {
                        method: 'GET',
                        url: "http://localhost:8080/api/getDepartments",
                        headers: {
                        'Authorization': 'Bearer ' + token
                        }
                    }

			      $http(req)
					.then(function successCallback(response) {
						ctrl.Deparments = response.data;
					},
                    function errorCallback(response) {
                        alert(response);
                    });
		}
		ctrl.getUnits=getUnits;
		function getUnits(id){

                    var req = {
                        method: 'GET',
                        url: "http://localhost:8080/api/getUnits/" + id,
                        headers: {
                        'Authorization': 'Bearer ' + token
                        }
                    }

			      $http(req)
					.then(function successCallback(response) {
						ctrl.Units = response.data;
					},
                    function errorCallback(response) {
                    });
		}
		ctrl.addDunit=addDunit;
		function addDunit(departmenid,unitid){
			var data = {
                departmentId: departmenid,
                userId: ctrl.id,
				unitId: unitid,
            };
            $http.post("http://localhost:8080/api/addDunit", JSON.stringify(data), {
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
            })
                .then(function successCallback(response) {
                    $('#dataTableId').DataTable().ajax.reload();	
				    $('#dunitModal').modal('hide');
                },
                    function errorCallback(response) {
                        alert(response);
                    });
			
		}
    }

})();