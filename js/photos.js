$(document).ready(function()
{
/*
	var OSName = "Unknown";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	console.log('Your OS is: '+OSName);
	*/

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

	$("#photoSubmit").click(function()
	{
		var group = $("#group").val();
		var album = $("#album").val();
		var filesUpload = document.getElementById("photos");
		filesUpload.onchange = function () 
		{

			var files = this.files;

		};
		console.log(files);
	});


});

function loadPage()
{
	document.getElementById("content").style.visibility = "visible";

}