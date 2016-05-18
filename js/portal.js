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

	if(level > 0)
	{

      $("#content").append("<div class='boxes h'><div class='front'><div class='ftitle'><h2>Account</h2></div><div class='fimage'>"
                           + "<img src='images/head.png'></img></div></div><div class='back'><ul><li>"
                           + "Update Email</li><li>Update Password</li></ul></div></div>");
   }

   if(level == 1)
   {
		$("#content").append("<div class='boxes h'><div class='front'><div class='ftitle'><h2>Blogs</h2></div><div class='fimage'>"
                           + "<img src='images/notebook.png'></img></div></div><div class='back'><ul><li><a href='portal/addBlog.html'>"
                           + "Add Blog</a></li><li><a href='portal/removeBlog.html'>Remove Blog</a></li></ul></div></div>");

      $("#content").append("<div class='boxes h'><div class='front'><div class='ftitle'><h2>Photos</h2></div><div class='fimage'>"
                           + "<img src='images/camera.png'></img></div></div><div class='back'><ul><li><a href='portal/addPhotos.html'>"
                           + "Add Photos</a></li><li><a href='portal/removePhotos.html'>Remove Photos</a></li></ul></div></div>");
   }  
	
}

