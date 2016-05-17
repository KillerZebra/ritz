
	$("#loginTrigger").click(function()
	{
		$("#LoginFormPopup").fadeIn();
			$("#LoginFormPopup").css({"visibility":"visible","display":"block"});
	});

	$("#closeLogin").click(function()
	{
		$("#LoginFormPopup").css({"visibility":"hidden","display":"block"});
	});


	$("#submit").click(function()
	{
		var username = $("#login").val();
		var pass = $("#password").val();

				
		$.ajax(
		{
			type: "POST",
			url: "php/accounts.php",
			data: {action:"login", username:username,pass:pass},
			dataType: "JSON",
			success: function(data)
			{
				console.log(data);
				$("#loginTrigger").html('Welcome ' + data.info['fName']);
	            $("#register a").html("Logout");
	            $("#register a").attr("href", "php/logout.php");
				$("#navigation ul li:last").after("<li><a href='portal.html'>Portal</a></li>");
				$("#LoginFormPopup").css({"visibility":"hidden","display":"block"});


			}

		});

		
	});

