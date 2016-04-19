$(document).ready(function() 
{

	var account = "";
	var level = 0;
	
	$.ajax(
   	{
         type: "GET",
         url: "php/checkSession.php",
         data: "",
         dataType: "json",
         success: function(data)
         {
           
            $("#loginTrigger").html(data.info['username']);
   			$("#reglog").attr('href', 'php/logout.php');
           	$("#reglog").html('Logout');
            level = data.info['level'];
            doStuff(level);



         },
         error: function(response)
         {
            window.location = "index.html";
         }

   	});

});

function doStuff(level)
{
	if(level == 1)
	{
		document.getElementById("content").style.visibility = "visible";
	}	
}

