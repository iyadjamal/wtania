$( document ).ready(function()
{
    $('#submit').submit(function (event) {
        localStorage.password= $('#pass').val();
        localStorage.email= $('#email').val();
        cordova.plugin.http.post('https://mobisharetest.000webhostapp.com/mobilogin.php',
            {
                password: localStorage.password,
                email:  localStorage.email
            },
            {
                Authorization: 'OAuth2: token'
            },
            function(response)
            {
                if(response.data=="ok")
                {
                    window.location.replace("main/index.html");
                }
                else
                {
                    alert("email or password is wrong or you need to activate your account check your email to activate it");
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
