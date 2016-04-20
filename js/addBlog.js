$(document).ready(function()
{
	$.ajax(
      {
         type: "GET",
         url: "../php/checkSession.php",
         data: "",
         dataType: "json",
         success: function(data)
         {
            
            $("#loginTrigger").html('Welcome ' + data.info['fName']);
            showPage(data);

         },

      });



});




function showPage(data)
{

	document.getElementById("content").style.visibility = "visible";
	$("#title").val("");
	$("#tinymceEditor").val("");


	tinymce.init({
		selector: '#tinymceEditor',
		height: 500,
  		plugins: 
  		[
    		'advlist autolink lists link image charmap print preview hr anchor pagebreak',
		    'searchreplace wordcount visualblocks visualchars code fullscreen',
		    'insertdatetime media nonbreaking save table contextmenu directionality',
		    'emoticons template paste textcolor colorpicker textpattern imagetools'
  		],
		toolbar1: 'insertfile undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  		toolbar2: 'print preview media | forecolor backcolor emoticons',
		content_css: 
		[
    		'../js/tinymce/skins/lightgray/content.min.css'
  		]
	});

	$("#formSubmit").click(function()
  	{
   		//console.log("hi");
   		var author = data.info['fName'];
   		var title = $("#title").val();
   		var content = tinyMCE.get('tinymceEditor').getContent()

   		//console.log("before ajax" + content)
   		$.ajax(
   		{
   			type: "POST",
   			url: "../php/blogs.php",
   			data: {action:"addBlog",author:author, title:title, blog:content},
   			dataType: "JSON",
   			success: function(data)
   			{
   				console.log("SUCCESS");
   			}

   		});

  	});


}

