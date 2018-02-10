$( document ).ready(function()
{
    $('#submit').submit(function (event) {
        localStorage.password= $('#pass').val();
        localStorage.email= $('#email').val();
        localStorage.phone= $('#phone').val();
        cordova.plugin.http.post('https://mobisharetest.000webhostapp.com',
            {
                name: localStorage.password,
                email:localStorage.email,
                phone:localStorage.phone
            },
            {
                Authorization: 'OAuth2: token'
            },
            function(response)
            {
                if(response.data=="hidone "+localStorage.email)
                {
                    alert("Registration done Successfully \n Now you have email to activate your account");
                    window.location.replace("../index.html");
                }
                else
                {
                    alert(response.data);
                }
            },
            function(response)
            {
                alert("an error occurred try agian later");
            });
        event.preventDefault();
    });
    var app = {
        // Application Constructor
        initialize: function() {
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        },

        // deviceready Event Handler
        //
        // Bind any cordova events here. Common events are:
        // 'pause', 'resume', etc.
        onDeviceReady: function()
        {

            this.receivedEvent('deviceready');
        },

        // Update DOM on a Received Event
        receivedEvent: function(id)
        {

        }
    };

    app.initialize();
});
