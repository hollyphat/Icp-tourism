$$(document).on('page:init', '.page[data-name="about"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
});

$$(document).on('page:init', '.page[data-name="login"]', function (e) {
	console.log(e.detail);
  // Do something here when page with data-name="about" attribute loaded and initialized
  
  					//var app = this.$app;                
                    var user_id = sessionStorage.getItem("user_id");
                    //console.log(user_id);
                    if (user_id != "") {
                        mainView.router.navigate("/home/",{});
                    }
                    
    
                    $("body").on("click",".btn-login",function (e) {
                        e.preventDefault();
                        var router = this.$router;
    
                        var email = $(".user-email").val();
                        var password = $(".user-password").val();
                        
                        if (email == "" || password == "") {
                            
                            app.toast.create({
                                text: 'All fields are required',
                                position: 'bottom',
                                closeTimeout: 3000
                            }).open();                        
                            //self.toastIcon.open();
                            vibration();
    
                            return false;
                        }
                        $("#signIn-btn").hide();
                        $("#loader").removeClass('hide');
    
                        //ajax login
                        $.ajax({
                            url: url,
                            type: 'post',
                            dataType: 'json',
                            crossDomain: true,
                            timeout: 45000,
                            data: {
                                'login-ok': '',
                                'email': email,
                                'password': password
                            },
                            success: function(f) {
                                //console.log(f);
                                if (f.ok == 0) {
                                    app.toast.create({
                                        text: f.msg,
                                        position: 'bottom',
                                        closeTimeout: 3000
                                    }).open();
                                    vibration();
                                    $("#signIn-btn").show();
                                    $("#loader").addClass('hide');
                                }else {
                                    //console.log(f.datas);
                                    var herbs = JSON.stringify(f.herbs);
                                    var saved_herbs = JSON.stringify(f.saved_herbs);
                                    //console.log(chats_lists);
                                    sessionStorage.setItem("herbs",herbs);
                                    sessionStorage.setItem("user_id", f.datas['id']);
                                    sessionStorage.setItem("name", f.datas['names']);
                                    sessionStorage.setItem("email", f.datas['email']);
                                    sessionStorage.setItem("phone", f.datas['phone']);
                                    sessionStorage.setItem("gender", f.datas['gender']);
                                    sessionStorage.setItem("saved_herbs",saved_herbs);
                                    $("#signIn-btn").show();
                                    $("#loader").addClass('hide');
                                    mainView.router.navigate("/home/",{});
                                }                   
                            },
                            error: function(e) {
                                app.toast.create({
                                    text: 'Network error, please ensure that you have active internet connections!',
                                    position: 'bottom',
                                    closeTimeout: 3000
                                }).open();

                                vibration();
                                //console.log(e.responseText);
                                //alert(e.responseText);
                                $("#signIn-btn").show();
                                $("#loader").addClass('hide');
                            }
                        });                   
                    });
});

$$(document).on('page:init', '.page[data-name="register"]', function (e) {
	console.log(e.detail);
	//var app = this.$app;
                $(".finish-reg").on("click", function(e) {
                    e.preventDefault();
                    //console.log($$("#up-btn"));
                    //alert("Hello");

                    var image_name = $("#reg-image").val();

                    //var self = this;
                    // Create toast
                    if(image_name == ""){
                        var toasts = app.toast.create({
                            text: 'You have not upload your profile picture',
                            position: 'bottom',
                            closeTimeout: 3000
                        });

                        toasts.open();

                        vibration();

                        return;
                    }

                    //Get all vars
                    var name = $("#reg-name").val();
                    var password = $("#reg-password").val();
                    var email = $("#reg-email").val();
                    var phone = $("#reg-phone").val();                    
                    var gender = $("#reg-gender").val();                    
                    var image = image_name;

                    if((name == "") || (password == "") || (email == "") || (phone == "") || (gender == "")){
                        var toasts = app.toast.create({
                            text: 'All fields are required',
                            position: 'bottom',
                            closeTimeout: 3000
                        });                        
                        toasts.open();
                        vibration();

                        return;
                    }

                    //create ajax to submit form
                    app.dialog.preloader('Please wait, while we complete your registration!');
                    $.ajax({
                       url: url,
                       type: 'post',
                       dataType: 'json',
                       crossDomain: true,
                       timeout: 45000,
                       data: {
                           'reg-ok': '',
                           'name': name,
                           'password': password,
                           'email': email,
                           'phone': phone,                           
                           'gender': gender
                       },
                        success: function (f) {
                           //console.log(f);
                           app.dialog.close();

                            if(f.ok == 1){
                                $("#reg-name").val("");
                                $("#reg-password").val("");
                                $("#reg-email").val("");
                                $("#reg-phone").val("");
                                $("#reg-gender").val("");
                                
                                
                                var t = app.toast.create({
                                text: f.msg,
                                position: 'bottom',
                                closeTimeout: 3000
                                }).open();
                                mainView.router.navigate("/login/",{});
                            }else{
                                var t = app.toast.create({
                                text: f.msg,
                                position: 'bottom',
                                closeTimeout: 3000
                                }).open();
                            }

                            
                        },
                        error: function (e) {
                           app.dialog.close();
                           console.log(e);
                           app.toast.create({
                               text: 'Network error, please ensure that you have active internet connections!',
                               position: 'bottom',
                               closeTimeout: 3000
                           }).open();
                           vibration();

                        }
                    });


                }); 
});