$(document).ready(function())
{
	$("#doLogin").click(function()
	{
		var test = "1 </br>";
		$("#message").val(test);

		if($("#login").val() === "")
		{
			 test = test + "2 </br>";
			 		$("#message").val(test);


			var id = $("#login").val();
			if($("#password").val() !== "")
			{
				test = test + "3 </br>";
						$("#message").val(test);


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
				
				$("#message").val("hihihihih");
			}

		}
		else
		{
			$("#message").val("empty");

		}


	});

});