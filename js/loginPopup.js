$("#loginTrigger").click(function()
	{
		$("#LoginFormPopup").fadeIn();
   		$("#LoginFormPopup").css({"visibility":"visible","display":"block"});
	});

	$("#closeLogin").click(function()
	{
   		$("#LoginFormPopup").css({"visibility":"visible","display":"block"});
	});


	$("#submit").click(function(event)
	{
			var username = $("#login").val();
			var pass = $("#password").val();

				
		$.ajax(
		{
			url : "php/login.php",
			type : "POST",
	    	dataType : "json",
			data : {username:username,pass:pass},
			cache: false,
			success: function(data)
			{
				setTimeout(' window.location.href = "portal.html"; ', 1000);


			}

		});

		
	});


