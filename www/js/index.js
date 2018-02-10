$( document ).ready(function()
{
	function update()
	{
			$('.select').css("background-color", "white");
	$('.select').attr("hidden","hidden");
	$('.select').click(function()
	{
		if( $(this).css("background-color") !== "rgb(211, 211, 211)" )
		{
			console.log($(this).css("background-color"));
			$(this).css("background-color", "lightgray");
		}
		else
		{
			$(this).css("background-color", "white");
		}
	});
		$('.show-all').click(function()
	{

            var c=this.parentNode.nextElementSibling.children[0].children;
        for (var i = 0; i < c.length; i++) {
            if(c[i].getAttribute("hidden")) {
				this.children[0].removeAttribute("class");
				this.children[0].setAttribute("class","glyphicon glyphicon-chevron-up");
                for (var i = 0; i < c.length; i++) {
                    c[i].removeAttribute("hidden");
                }
               return;
            }
        }
				this.children[0].removeAttribute("class");
				this.children[0].setAttribute("class","glyphicon glyphicon-chevron-down");
                        for (var i = 0; i < c.length; i++) {
                	c[i].setAttribute("hidden", "hidden");
            }


	});
	$('.select-all').click(function()
	{

            var c=this.parentNode.nextElementSibling.children[0].children;
        for (var i = 0; i < c.length; i++) {
            if( c[i].style.backgroundColor != "lightgray") {
                for (var i = 0; i < c.length; i++) {
                    c[i].style.backgroundColor = "lightgray";
                }
               return;
            }
        }

                        for (var i = 0; i < c.length; i++) {
                	c[i].style.backgroundColor = "white";
            }


	});
	}
	var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

		function onSuccess(contacts) {
    // for (var i = 0; i < contacts.length; i++) {
        // for (var j = 0; j < contacts[i].addresses.length; j++) {
            // alert(
                // "Type: "           + contacts[i].addresses[j].type          + "\n" +
                // "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                // "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                // "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                // "Region: "         + contacts[i].addresses[j].region        + "\n" +
                // "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                // "Country: "        + contacts[i].addresses[j].country);
        // }
    // }
	var length=contacts.length;
	    	    var innerHTML="<div style=' width:100%; padding-left: 20px;margin-bottom: 0px;border-bottom:black 1px solid;'><a  class=' show-all' style='font-size:22px' type='submit' value='Map'><span style='color:black;' class='glyphicon glyphicon glyphicon-chevron-down'></span></a><span style='font-size:30px'>All</span> <a class='btn select-all'style='border:solid 1px black;color:black; clear:both;float:right;margin-right:20px;margin-top:2px;'>All</a></div><table class='table ' style=' margin-left: 20px; width:97%'>";

		for(var i=0;i<length;i++)
		{
			//alert('Found ' +length + ' contacts. this is  : '+ contacts[i].phoneNumbers[0].value);
			var plength=contacts[i].phoneNumbers.length;
			for(var j=0;j<plength;j++)
			 innerHTML+="<tr class='select'><td>"+contacts[i].displayName+"</td><td>"+contacts[i].phoneNumbers[j].value+"</td></tr>";
		}
   // for(var i = 0; i < contacts.length; i++) {
     //   for(var j = 0; j < contacts[i].phoneNumbers.length; j++) {
           // var phone = contacts[i].phoneNumbers[j];
          //
      //   }

   //  }
     innerHTML+="</table>";
    $(".content").append(innerHTML);
    $("#AddGroup").append(innerHTML);
		update();
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts
var options = new ContactFindOptions();
options.filter = "";
options.multiple = true;
var filter = ["displayName", "addresses"];
navigator.contacts.find(filter, onSuccess, onError, options);
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
});	
