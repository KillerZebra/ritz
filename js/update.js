var action = "";


$(document).ready(function()
{
	$(document).on('click', '.back ul li', function()
	{
		var html = $(this).html();
		if(html.indexOf('Email') > -1)
		{
			showPopup('email');
		}
		else if(html.indexOf('Password') > -1)
		{
			showPopup('password');
		}

	});

	$("#closeUpdateBox").click(function()
	{
		$("#updateBox").fadeOut();
		$(".overlay").fadeOut();
		$("#updateBoxBody").empty();
	});

	$("#submitUpdate").click(function()
	{
		$("#current").css("border", "none");
		$("#new").css("border", "none");
		$("#repeat").css("border", "none");

		var current = $("#current").val();
		var newInfo = $("#new").val();
		var confirm = $("#repeat").val();
		var error = 0;

		if(current == "")
		{
			$("#current").css("border", "3px solid #FF0000");
			error++;
		}
		if(newInfo == "")
		{
			$("#new").css("border", "3px solid #FF0000");
			error++;
		}
		if(confirm == "")
		{
			$("#repeat").css("border", "3px solid #FF0000");
			error++;
		}


		if(action == "updateEmail")
		{
			if(!isValidEmailAddress(current))
			{
				$("#current").css("border", "3px solid #FF0000");
				error++;
			}
			if(!isValidEmailAddress(newInfo))
			{
				$("#new").css("border", "3px solid #FF0000");
				error++;
			}
		}
		if(newInfo != confirm)
		{
			$("#new").css("border", "3px solid #FF0000");
			$("#repeat").css("border", "3px solid #FF0000");
			error++;
		}

		if(error == 0)
		{
			$.ajax(
			{
				type: "POST",
				url: "php/accounts.php",
				data: {action:action, id:accountID, current:current, newInfo:newInfo},
				dataType: "JSON",
				success: function(data)
				{
					alert(data.message);
				}

			});
		}

	});

});

function showPopup(type)
{
	$(".overlay").fadeIn();
	$("#updateBox").fadeIn();
	if(type == "email")
	{
		$("#updateBoxBody").append("<label for='current' id='currentLabel'>Current Email Address</label><input type='text' id='current'><br>"
				    				+ "<label for='new' id='newLabel'>New Email</label><input type='text' id='new' class='fields'>"
				    				+ "<label for='repeat' id='retypeLabel'>Retype New Email</label><input type='text' id='repeat' class='fields'>");
		$("#updateBox h2").html("Update Email");
		action = "updateEmail";

	}
	else
	{
		$("#updateBox h2").html("Update Password");
		$("#updateBoxBody").append("<label for='current' id='currentLabel'>Current Password</label><input type='password' id='current'><br>"
				    				+ "<label for='new' id='newLabel'>New Password</label><input type='password' id='new' class='fields'>"
				    				+ "<label for='repeat' id='retypeLabel'>Retype New Password</label><input type='password' id='repeat' class='fields'>");
		action = "updatePassword";

	}


}

function isValidEmailAddress(emailAddress) 
{
   	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
   	return pattern.test(emailAddress);
};