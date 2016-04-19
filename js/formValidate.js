function isValidEmailAddress(emailAddress) 
{
   	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
   	return pattern.test(emailAddress);
};
var timer;
var valError = "";

$("#regForm").submit(function(event)
{
	var error = ""; 
	if(valError != "")
	{
		error = valError; 
		$("#error").html(error);

	}


	if($("#fName").val() == "")
	{
		error = error + "<br />Please Enter your first name.";
	}
	if($("#lName").val() == "")
	{
		error = error + "<br />Please Enter your Last name.";
	}
	if(!isValidEmailAddress($("#email").val()))
	{
		error = error + "<br />Invald Email Address";
	}
	if($("#uName").val() == "")
	{
		error = error + "<br />Please Enter your Username.";
	}
	if($("#pass").val() == "")
	{
		error = error + "<br />No password Entered";
	}
	if($("#pass").val() != $("#cpass").val())
	{
		error = error + "<br />Password mismatch.";
	}




	if(error == "")
	{
		var fName = $("#fName").val();
		var lName = $("#lName").val();
		var uName = $("#uName").val();
		var email = $("#email").val();
		var password = $("#pass").val();


		$.ajax(
		{
	    	url : "php/register.php",
	    	type: "POST",
	    	data : {fName:fName,lName:lName,uName:uName,email:email,pass:password}
		}); 


	}
	else
	{
		event.preventDefault();
		$("#error").html(error);

	}

});

$("#email").keyup(function()
{
	clearTimeout(timer); 
	$("#loading2").attr('src', 'images/loading.gif');
	$("#loading2").css({"visibility":"visible"});
	timer = setTimeout(checkEmail, 2000);


});

$("#uName").keyup(function()
{
	clearTimeout(timer); 
	$("#loading1").attr('src', 'images/loading.gif');
	$("#loading1").css({"visibility":"visible"});
	timer = setTimeout(checkUsername, 2000);


});


function checkEmail()
{
	var email = $("#email").val();
	$.ajax(
	{
		url : "php/validate.php",
		type : "POST",
	    dataType : "json",
		data : {email:email},
		success: function(response)
		{
			$("#loading2").attr('src', 'images/check.png');
		},
		error: function(request)
		{
			$("#loading2").attr('src', 'images/close.png');
		}

	});



};

function checkUsername()
{
	var username = $("#uName").val();
	$.ajax(
	{
		url : "php/validate.php",
		type : "POST",
	    dataType : "json",
		data : {username:username},
		success: function(response)
		{
			$("#loading1").attr('src', 'images/check.png');	
		},
		error: function(request)
		{
			$("#loading1").attr('src', 'images/close.png');
		}

	});



};