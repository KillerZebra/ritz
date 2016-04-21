$(document).ready(function()
{
	$.ajax(
	{
		type: "POST",
		url: "../php/checkSession.php",
		data: "",
		dataType: "JSON",
		success: function(data)
		{	
			$("#loginTrigger").html("Welcome " + data.info['fName']);
			loadPage();
		}
		
	});


});

function loadPage()
{
	document.getElementById("content").style.visibility = "visible";

}