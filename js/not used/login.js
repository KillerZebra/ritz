$("#loginForm").submit(function(event)
{
	$("#message").val("1");

	if($("#login").val() === "")
	{
		var id = $("#login").val();
		$("#message").val("1");


		if($("#password").val() !== "")
		{
			var pass = $("#password").val();
			$.ajax(
			{
				url: "php/login.php",
				type: "post",
				dataType: "json",
				data:  {uName:id , password:pass},
				success: function(response)
				{
					alert("Succeed");
				}

			});
			

		}

	}
	else
	{
		$("#message").val("empty");

	}


});