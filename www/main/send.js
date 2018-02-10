$( document ).ready(function()
{
    $('#send').click(function () {
        var permissions = cordova.plugins.permissions;
        permissions.requestPermission(permissions.SEND_SMS, function()
        {
            $('.select').each(function () {
                if(this.style.backgroundColor == "lightgray")
                {
                    var phone=this.children[1].innerHTML;
                    var messageInfo = {
                        phoneNumber: ""+phone,
                        textMessage: "Hi I am Iyad and this is my new Number 0569298643"
                    };

                    sms.sendMessage(messageInfo, function(message) {
                        alert("success: " + message);
                        window.location.replace("index.html");
                    }, function(error) {
                        alert("code: " + error + ", message: " + error.message);
                    });
                }
            });
        }, function(){alert("failed");});

    });
});