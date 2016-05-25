$(document).ready(function()
{

  //checks if someone is logged in
	$.ajax(
      {
         type: "POST",
         url: "../php/checkSession.php",
         data: "",
         dataType: "JSON",
         success: function(data)
         {
             
            $( "#loginTrigger" ).html( 'Welcome ' + data.info[ 'fName' ] );
            $( "#register a" ).html( "Logout" );
            $( "#register a" ).attr( "href", "php/logout.php" );
            $( "#navigation ul li:last" ).after( "<li><a href='../portal.html'>Portal</a></li>" );

            showPage(data);

         },

      });



});




function showPage(data)
{

	document.getElementById( "content" ).style.visibility = "visible";
	$( "#title" ).val( "" );
	$( "#tinymceEditor" ).val( "" );

  //loads and setups tinyMCE editor
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

	$( "#formSubmit" ).click(function()
  	{
   		var author = data.info[ 'fName' ];
   		var title = $( "#title" ).val();
   		var content = tinyMCE.get( 'tinymceEditor' ).getContent()

      //adds the blog to the database
   		$.ajax(
   		{
   			type: "POST",
   			url: "../php/blogs.php",
   			data: {action:"addBlog",author:author, title:title, blog:content},
   			dataType: "JSON",
   			complete: function()
   			{
          $( "#title" ).val( "" );
          tinyMCE.activeEditor.setContent( "" );
   			}

   		});

  	});


}

