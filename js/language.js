(function () {
    'use strict';

    angular
        .module('app')
        .controller('Language', ['$http', language]);

    function language($http) {
        var lang = this;
		
		(function () {
				lang.adminheader="Bilgi Islem Dairesi Yonetici Paneli";
				lang.managerheader="Bilgi Islem Dairesi Yetkili Paneli";
				lang.managerplsunit="Lutfen birim secin!";
				lang.optunit="Biriminiz";
				lang.copyright="Copyright";
				lang.del="Sil";
        })();
		
		lang.translateeng = translateeng;
		function translateeng(){
				lang.adminheader="Information Departmant Admin Panel";
				lang.managerheader="Information Departmant Manager Panel";
				lang.managerplsunit="Please choose your unit!";
				lang.optunit="Your unit";
				lang.copyright="Copyright";
				lang.del="Del";
		}
		lang.translatetr = translatetr;
		function translatetr(){
				lang.adminheader="Bilgi Islem Dairesi Yonetici Paneli";
				lang.managerheader="Bilgi Islem Dairesi Yetkili Paneli";
				lang.managerplsunit="Lutfen birim secin!";
				lang.optunit="Biriminiz";
				lang.copyright="Copyright";
				lang.del="Sil";
		}
    }

})();