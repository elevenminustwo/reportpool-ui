(function () {
    'use strict';

    angular
        .module('app')
        .controller('Language', ['$http', language]);

    function language($http) {
        var lang = this;
		
		(function () {
				//Login====>
				lang.logintitle="Giriş Ekranı";
				lang.username="Kullanıcı Adı";
				lang.password="Şifre";
				lang.rememberme="Beni Hatırla";
				lang.login="Giriş Yap";
				lang.signup="Kayıt Ol";
				lang.havenoaccount="Hesabınız yok mu?";
				lang.forgotpsw="Şifrenizi mi unuttunuz?";
				//<=========
				
				//Register====>
				lang.registertitle="Kayıt Ekranı";
				lang.regusername="Kullanıcı Adı";
				lang.passwordre="Şifre(tekrar)";
				lang.name="İsim";
				lang.surname="Soyisim";
				lang.email="Mail adresi";
				lang.uniqueid="Sicil No";
				lang.signin="Giriş Yap";
				//<=========

				//Password Reset====>
				lang.passwordresettitle="Şifre Yenileme Ekranı";
				lang.enternewpassword="yeni şifreniz";
				lang.enternewpasswordagain="yeni şifreniz tekrar";
				lang.passwordresetbutton="Yenile";
				//<==========

				//Password Forgot====>
				lang.passwordforgottitle="Şifre Talep Ekranı";
				lang.enteryouremailforpassword="email adresiniz";
				lang.passwordresetrequestbutton="Şifre Yenileme Talebi";
				//<==========


				//Admin====>
				lang.admintitle="Yönetici Ekranı";
				lang.adminheader="Bilgi İşlem Dairesi Yönetici Paneli";
				lang.admindtusername="Kullanıcı Adı";
				lang.admindtname="İsim";
				lang.admindtsurname="Soyisim";
				lang.admindtemail="Mail Adresi";
				lang.admindtisactive="Aktif mi? / Aktivasyon emaili yolla";
				lang.admindtrolename="Rolü";
				lang.admindtunitname="Birim adı";
				lang.admindtdepartmentname="Departman adı";
				lang.addrolemodal="Rol ekleme modülü";
				lang.selectrole="Rol seçiniz";
				lang.admin="Yönetici";
				lang.manager="Birim Amiri";
				lang.user="Kullanıcı";
				lang.deleterolemodal="Rol silme modülü";
				lang.sure="Emin misiniz?";
				lang.depunitadd="Birim ekleme modülü";
				lang.selectdepartment="Departman seçiniz";
				lang.selectunit="Birim Seçiniz";
				lang.deletedepmodal="Departman Silme Modülü";
				lang.logssurface="Loglar(Yüzeysel)";
				lang.logsdetailed="Loglar(Detaylı)";
				lang.editdepartments="Departmanları Düzenle";
				//<=========
				
				//Modal====>
				lang.add="Ekle";
				lang.cancel="İptal";
				lang.del="Sil";
				//<=========
				
				//Create Departmant====>
				lang.departmentcreatetitle="Departman Oluşturma Ekranı";
				lang.depcreatehead="Departman Oluştur";
				lang.depaddmodal = "Departman Ekleme Modülü";
				lang.createdepartmentname = "Departman İsmi";
				lang.depadd = "Departman İsmi";
				lang.unitadd = "Birim Ekle";
				lang.unitaddmodal = "Birim Ekleme Modülü";
				lang.unitname = "Birim İsmi";
				//<=========
				
				//Create Unit====>
				lang.unitcreatetitle="Birim Oluşturma Ekranı";
				lang.createunit="Birim Oluştur";
				//<=========
				
				//Manager====>
				lang.managertitle="Yetkili Ekranı";
				lang.managerheader="Bilgi İşlem Dairesi Yetkili Paneli";
				lang.managerplsunit="Lütfen birim seçin!";
				lang.managerreport="Rapor Alanı";
				lang.managerchoosefile="Eklemek istediğiniz dosyayı seçiniz";
				lang.managercheckunitreports ="Birim raporlarını incele";
				lang.managercommitreport="Raporu işle";
				lang.managersave="Kaydet";
				lang.optunit="Biriminiz";
				lang.passwordchangerequest="Şifre Değişikliği";
				//<=========
				
				//User====>
				lang.usertitle="Kullanıcı Ekranı";
				lang.userheader="Bilgi İşlem Daire Başkanlığı Rapor Giriş Ekranı";
				lang.userplsunit="Lütfen birim seçin!";
				lang.userreport="Rapor Alanı";
				lang.userchoosefile="Eklemek istediğiniz dosyayi seçiniz";
				lang.usercommitreport="Raporu işle";
				lang.usersave="Kaydet";
				//<=========

				//Manager and User Report Entry and Upload Tags
				lang.subjectofjob="#[İşin Konusu]";
				lang.dateofjob="#[İşin Tarih Aralığı] (Örneğin: 1 Mayıs 2019'tan 7 Mayıs 2019'a kadar)";
				lang.thingsdoneinjob="#[Yapılanlar]";
				lang.uploadtagforimages="Eklemek istediginiz resim varsa seçiniz (Resimler en fazla 16MB olabilir)";
				//<=========
				
				//Unit Reports====>
				lang.unitreportstemplate="Birim Raporları Ekranı";
				lang.managertableusername="Oluşturanın Kullanıcı Adı";
				lang.managertablename="Adı Soyadı";
				lang.managertabledate=" Raporun Teslim Tarihi";
				lang.managertablereport="Rapor";
				lang.reportdaterange="Tarih Aralığı";
				lang.reportlistimages="Resimler"
				//<=========
				
				//Footer====>
				lang.copyright="Akdeniz Üniversitesi Tüm Hakları Saklıdır.";
				lang.logout="Çıkış Yap";
				//<=========
				
				//Log=====>
				lang.logtemplate="Sistem  Akış Ekranı";
				lang.log = "Sistem  Akışı";
				//<========
        })();
		
		lang.translateeng = translateeng;
		function translateeng(){
				//Login====>
				lang.logintitle="Login Template";
				lang.username="Username";
				lang.password="Password";
				lang.rememberme="Remember me";
				lang.login="Login";
				lang.signup="Sign up";
				lang.havenoaccount="Don't you have an account?";
				lang.forgotpsw="Forgot your password?";
				//<=========
				
				//Register====>
				lang.registertitle="Register Template";
				lang.regusername="Username";
				lang.passwordre="Password(again)";
				lang.name="Name";
				lang.surname="Surname";
				lang.email="Email";
				lang.uniqueid="Unique ID";
				lang.signin="Sign in";
				//<=========

				//Password Reset====>
				lang.passwordresettitle="Password Reset Screen";
				lang.enternewpassword="new password";
				lang.enternewpasswordagain="new password again";
				lang.passwordresetbutton="Reset";
				//<=========

				//Password Forgot====>
				lang.passwordforgottitle="Password Change Request Screen";
				lang.enteryouremailforpassword="your email";
				lang.passwordresetrequestbutton="Request Password Reset";
				//<==========
				
				//Admin====>
				lang.admintitle="Admin Template";
				lang.adminheader="Information Departmant Admin Panel";
				lang.admindtusername="Username";
				lang.admindtname="Name";
				lang.admindtsurname="Surname";
				lang.admindtemail="Email";
				lang.admindtisactive="Is Active? / Send activation email";
				lang.admindtrolename="Role";
				lang.admindtunitname="Unit name";
				lang.admindtdepartmentname="Department name";
				lang.addrolemodal="Add Role Modal";
				lang.selectrole="Select role";
				lang.admin="Admin";
				lang.manager="Manager";
				lang.user="User";
				lang.deleterolemodal="Role Delete Modal";
				lang.sure="Are you sure?";
				lang.depunitadd="Department Unit Add Modal";
				lang.selectdepartment="Select department";
				lang.selectunit="Select unit";
				lang.deletedepmodal="Delete Department Modal";
				lang.logssurface="Logs(Simple)";
				lang.logsdetailed="Logs(Detailed)";
				lang.editdepartments="Edit Departments";
				//<=========
				
				//Modal====>
				lang.add="Add";
				lang.cancel="Cancel";
				lang.del="Del";
				//<=========
				
				//Create Departmant====>
				lang.departmentcreatetitle="Department Create Template";
				lang.depcreatehead="Department Create";
				lang.depaddmodal = "Department Add Modal";
				lang.createdepartmentname = "Department Name";
				lang.depadd = "Department Add";
				lang.unitadd = "Unit Add";
				lang.unitaddmodal = "Unit Add Modal";
				lang.unitname = "Unit Name";
				//<=========
				
				//Create Unit====>
				lang.unitcreatetitle="Unit Create Template";
				lang.createunit="Create Unit";
				//<=========
				
				//Manager====>
				lang.managertitle="Manager Template";
				lang.managerheader="Information Departmant Manager Panel";
				lang.managerplsunit="Please choose your unit!";
				lang.managerreport="Report Area";
				lang.managerchoosefile="Choose file";
				lang.managercheckunitreports ="Check unit reports";
				lang.managercommitreport="Commit report";
				lang.managersave="Save";
				lang.optunit="Your unit";
				lang.passwordchangerequest="Password change";
				//<=========
				
				//User====>
				lang.usertitle="User Template";
				lang.userheader="Information Departmant User Report Panel";
				lang.userplsunit="Please choose your unit!";
				lang.userreport="Report Area";
				lang.userchoosefile="Choose file";
				lang.usercommitreport="Commit report";
				lang.usersave="Save";
				//<=========
				
				//Manager and User Report Entry and Upload Tags
				lang.subjectofjob="#[Subject of the job]";
				lang.dateofjob="#[Date period of the job] (Ex: May 1 2019 to May 2 2019)";
				lang.thingsdoneinjob="#[Things done]";
				lang.uploadtagforimages="Select if you would like to add images (Max. size 16MB)";
				//<=========

				//Unit Reports====>
				lang.unitreportstemplate="Unit Reports Template";
				lang.managertableusername="Username";
				lang.managertablename="Full Name";
				lang.managertabledate="Report Date Completed";
				lang.managertablereport="Report";
				lang.reportdaterange="Date Range";
				lang.reportlistimages="Images"
				//<=========
				
				//Footer====>
				lang.copyright="Akdeniz University All rights reserved.";
				lang.logout="Log Out";
				//<=========
				
				//Log=====>
				lang.logtemplate="Log Template";
				lang.log = "Log";
				//<========
		
		}
		lang.translatetr = translatetr;
		function translatetr(){
				//Login====>
				lang.logintitle="Giriş Ekranı";
				lang.username="Kullanıcı Adı";
				lang.password="Şifre";
				lang.rememberme="Beni Hatırla";
				lang.login="Giriş Yap";
				lang.signup="Kayıt Ol";
				lang.havenoaccount="Hesabınız yok mu?";
				lang.forgotpsw="Şifrenizi mi unuttunuz?";
				//<=========
				
				//Register====>
				lang.registertitle="Kayıt Ekranı";
				lang.regusername="Kullanıcı Adı";
				lang.passwordre="Şifre(tekrar)";
				lang.name="İsim";
				lang.surname="Soyisim";
				lang.email="Mail adresi";
				lang.uniqueid="Sicil No";
				lang.signin="Giriş Yap";
				//<=========

				//Password Reset====>
				lang.passwordresettitle="Şifre Yenileme Ekranı";
				lang.enternewpassword="yeni şifreniz";
				lang.enternewpasswordagain="yeni şifreniz tekrar";
				lang.passwordresetbutton="Yenile";
				//<=========

				//Password Forgot====>
				lang.passwordforgottitle="Şifre Talep Ekranı";
				lang.enteryouremailforpassword="email adresiniz";
				lang.passwordresetrequestbutton="Şifre Yenileme Talebi";
				//<==========
				
				//Admin====>
				lang.admintitle="Yönetici Ekranı";
				lang.adminheader="Bilgi İşlem Dairesi Yönetici Paneli";
				lang.admindtusername="Kullanıcı Adı";
				lang.admindtname="İsim";
				lang.admindtsurname="Soyisim";
				lang.admindtemail="Mail Adresi";
				lang.admindtisactive="Aktif mi? / Aktivasyon emaili yolla";
				lang.admindtrolename="Rolü";
				lang.admindtunitname="Birim adı";
				lang.admindtdepartmentname="Departman adı";
				lang.addrolemodal="Rol ekleme modülü";
				lang.selectrole="Rol seçiniz";
				lang.admin="Yönetici";
				lang.manager="Birim Amiri";
				lang.user="Kullanıcı";
				lang.deleterolemodal="Rol silme modülü";
				lang.sure="Emin misiniz?";
				lang.depunitadd="Birim ekleme modülü";
				lang.selectdepartment="Departman seçiniz";
				lang.selectunit="Birim Seçiniz";
				lang.deletedepmodal="Departman Silme Modülü";
				lang.logssurface="Loglar(Yüzeysel)";
				lang.logsdetailed="Loglar(Detaylı)";
				lang.editdepartments="Departmanları Düzenle";
				//<=========
				
				//Modal====>
				lang.add="Ekle";
				lang.cancel="İptal";
				lang.del="Sil";
				//<=========
				
				//Create Departmant====>
				lang.departmentcreatetitle="Departman Oluşturma Ekranı";
				lang.depcreatehead="Departman Oluştur";
				lang.depaddmodal = "Departman Ekleme Modülü";
				lang.createdepartmentname = "Departman İsmi";
				lang.depadd = "Departman İsmi";
				lang.unitadd = "Birim Ekle";
				lang.unitaddmodal = "Birim Ekleme Modülü";
				lang.unitname = "Birim İsmi";
				//<=========
				
				//Create Unit====>
				lang.unitcreatetitle="Birim Oluşturma Ekranı";
				lang.createunit="Birim Oluştur";
				//<=========
				
				//Manager====>
				lang.managertitle="Yetkili Ekranı";
				lang.managerheader="Bilgi İşlem Dairesi Yetkili Paneli";
				lang.managerplsunit="Lütfen birim seçin!";
				lang.managerreport="Rapor Alanı";
				lang.managerchoosefile="Eklemek istediğiniz dosyayı seçiniz";
				lang.managercheckunitreports ="Birim raporlarını incele";
				lang.managercommitreport="Raporu işle";
				lang.managersave="Kaydet";
				lang.optunit="Biriminiz";
				lang.passwordchangerequest="Şifre Değişikliği";
				//<=========
				
				//User====>
				lang.usertitle="Kullanıcı Ekranı";
				lang.userheader="Bilgi İşlem Daire Başkanlığı Rapor Giriş Ekranı";
				lang.userplsunit="Lütfen birim seçin!";
				lang.userreport="Rapor Alanı";
				lang.userchoosefile="Eklemek istediğiniz dosyayi seçiniz";
				lang.usercommitreport="Raporu işle";
				lang.usersave="Kaydet";
				//<=========

				//Manager and User Report Entry and Upload Tags
				lang.subjectofjob="#[İşin Konusu]";
				lang.dateofjob="#[İşin Tarih Aralığı] (Örneğin: 1 Mayıs 2019'tan 7 Mayıs 2019'a kadar)";
				lang.thingsdoneinjob="#[Yapılanlar]";
				lang.uploadtagforimages="Eklemek istediginiz resim varsa seçiniz (Resimler en fazla 16MB olabilir)";
				//<=========
				
				//Unit Reports====>
				lang.unitreportstemplate="Birim Raporları Ekranı";
				lang.managertableusername="Oluşturanın Kullanıcı Adı";
				lang.managertablename="Adı Soyadı";
				lang.managertabledate=" Raporun Teslim Tarihi";
				lang.managertablereport="Rapor";
				lang.reportdaterange="Tarih Aralığı";
				lang.reportlistimages="Resimler"
				//<=========
				
				//Footer====>
				lang.copyright="Akdeniz Üniversitesi Tüm Hakları Saklıdır.";
				lang.logout="Çıkış Yap";
				//<=========
				
				//Log=====>
				lang.logtemplate="Sistem  Akış Ekranı";
				lang.log = "Sistem  Akışı";
				//<========
		}
    }

})();