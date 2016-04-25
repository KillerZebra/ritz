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
		var files = $('#photos').prop("files");
		var names = $.map(files, function(val) { return val.name; });
		if(group != null && album != "" && files.length > 0)
		{
			uploadPhotos(group,album,names);

		}
		else
		{
			console.log("error");
		}
	});


});

function loadPage()
{
	document.getElementById("content").style.visibility = "visible";

}

function uploadPhotos(group, album, names)
{

}