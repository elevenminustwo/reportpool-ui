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
				lang.managerreport="Rapor Alani";
				lang.managerchoosefile="Eklemek istediginiz dosyayi seciniz";
				lang.managercheckunitreports ="Birim raporlarini incele";
				lang.managercommitreport="Raporu isle";
				lang.managersave="Kaydet";
				lang.optunit="Biriminiz";
				lang.del="Sil";
				lang.admindtusername="Kullanici Adi";
				lang.admindtname="Isim";
				lang.admindtsurname="Soyisim";
				lang.admindtemail="Mail Adresi";
				lang.admindtisactive="Aktif mi?";
				lang.admindtrolename="Rolu";
				lang.admindtunitname="Birim adi";
				lang.managertablename="Oluşturan Adı";
				lang.managertablesurname=" Oluşturan Soyadı";
				lang.managertabledate=" Raporun Teslim Tarihi";
				lang.managertablereport="Rapor";
				lang.admindtdepartmentname="Departman adi";
				lang.copyright="Akdeniz Universitesi Tum Haklari Saklidir.";

        })();
		
		lang.translateeng = translateeng;
		function translateeng(){
				lang.adminheader="Information Departmant Admin Panel";
				lang.managerheader="Information Departmant Manager Panel";
				lang.managerplsunit="Please choose your unit!";
				lang.managerreport="Report Area";
				lang.managerchoosefile="Choose file";
				lang.managercheckunitreports ="Check unit reports";
				lang.managercommitreport="Commit report";
				lang.managersave="Save";
				lang.optunit="Your unit";
				lang.del="Del";
				lang.admindtusername="Username";
				lang.admindtname="Name";
				lang.admindtsurname="Surname";
        lang.admindtemail="Email";
				lang.admindtisactive="Is Active?";
				lang.admindtrolename="Role";
				lang.admindtunitname="Unit name";
				lang.managertablename="Name";
				lang.managertablesurname="Surname";
				lang.managertabledate="Report Date Completed";
				lang.managertablereport="Report";
				lang.admindtdepartmentname="Department name";
				lang.copyright="Akdeniz University All rights reserved.";
		}
		lang.translatetr = translatetr;
		function translatetr(){
				lang.adminheader="Bilgi Islem Dairesi Yonetici Paneli";
				lang.managerheader="Bilgi Islem Dairesi Yetkili Paneli";
				lang.managerplsunit="Lutfen birim secin!";
				lang.managerreport="Rapor Alani";
				lang.managerchoosefile="Eklemek istediginiz dosyayi seciniz";
				lang.managercheckunitreports ="Birim raporlarini incele";
				lang.managercommitreport="Raporu isle";
				lang.managersave="Kaydet";
				lang.optunit="Biriminiz";
				lang.del="Sil";
				lang.admindtusername="Kullanici Adi";
				lang.admindtname="Isim";
				lang.admindtsurname="Soyisim";
        lang.admindtemail="Mail Adresi";
				lang.admindtisactive="Aktif mi?";
				lang.admindtrolename="Rolu";
				lang.admindtunitname="Birim adi";
				lang.managertablename="Oluşturan Adı";
				lang.managertablesurname=" Oluşturan Soyadı";
				lang.managertabledate=" Raporun Teslim Tarihi";
				lang.managertablereport="Rapor";
				lang.admindtdepartmentname="Departman adi";
				lang.copyright="Akdeniz Universitesi Tum Haklari Saklidir.";
		}
    }

})();