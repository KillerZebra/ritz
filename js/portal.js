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
           
            $("#loginTrigger").html('Welcome ' + data.info['fName']);
            $("#register a").html("Logout");
            $("#register a").attr("href", "php/logout.php");
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
   $("#navigation ul li:last").after("<li><a href='../portal.html'>Portal</a></li>");

	if(level == 1)
	{
		document.getElementById("content").style.visibility = "visible";
	}	
}

