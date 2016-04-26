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
			$.ajax(
			{
				type: "POST",
				url: "../php/photos.php",
				data: {action:"checkExist" , groupName:group , albumName:album},
				dataType: "JSON",
				success: function(data)
				{
					if (data[0] == "true")
					{
						console.log("Folder Name already exists");
					}
					else if (data[0] == "false")
					{
						uploadPhotos(group,album,files,names);
					}

				}

			});
			

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

function uploadPhotos(group, album, files, names)
{
	$.ajax(
	{
		method: "POST",
		url: "../php/photos.php",
		data: {action:"upload" , groupName:group , albumName:album , fileName:names},
		dataType: "JSON",
		success: function(data)
		{
			console.log(data);
		}
	});

	$.ajax(
	{
		method: "POST",
		url: "../php/photos.php",
		data: {files:files},
		dataType: "JSON",
		contentType: false,
    	processData: false,
		success: function(data)
		{
			console.log(data);
		}
	});


}