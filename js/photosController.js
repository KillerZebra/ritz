$(document).ready(function()
{
	//checks if someone is logged in
	$.ajax(
	{
		type: "POST",
		url: "../php/checkSession.php",
		data: "",
		dataType: "JSON",
		success: function( data )
		{	 
			$( "#loginTrigger" ).html( "Welcome " + data.info[ 'fName' ]);
			$( "#navigation ul li:last" ).after( "<li><a href='portal.html'>Portal</a></li>" );

			loadPage();
		}
		
	});

	$( "#photoSubmit" ).click(function()
	{
		$( "#error" ).html( "" );
		$( "#success" ).html( "" );
		var group = $( "#group" ).val();
		var album = $( "#album" ).val();
		var files = $( '#photos' ).prop( "files" );
		var fData = new FormData();

		//puts all form data into a FormDAta object so PHP can read it as a file
		fData.append( 'action' , 'uploadFile' );
		fData.append( 'groupName' , group );
		fData.append( 'albumName' , album );
		$.each($( "input[type=file]" ), function( i , obj ) 
		{
		        $.each(obj.files,function( j,file )
		        {
		            fData.append( 'photo['+j+']', file );
		        });
		});


		if( group != null && album != "" && files.length > 0 )
		{

			uploadPhotos( group , album , fData );

		}
		else
		{
			$( "#error" ).append( "-----------------------" );
			$( "#error" ).append( "ERROR: Please fill out all fields. " );

		}
	});


});

function loadPage()
{
	document.getElementById( "content" ).style.visibility = "visible";

}

//send the file to a script
function uploadPhotos( group, album, fData )
{

	$.ajax(
	{
		method: "POST",
		url: "../php/photos.php",
		data: fData,
		dataType: "JSON",
		contentType: false,
    	processData: false,
		success: function( data )
		{
			printResults( data );
		}
	});


}

//uses the data to reset the form if successful 
function printResults( data )
{
	$( '#photoForm' ).trigger( "reset" );
	for ( var x = 0; x < data.results.length; x++ ) 
	{
		for ( var y = 0; y < data.results[x].length; y++ )
		{
			if( data.results[x][y].contains( "SUCCESS" ) )
			{
				$( "#success" ).append( "-----------------------" );
				$( "#success" ).append( data.results[x][y] );
			}
			else
			{
				$( "#error" ).append( "-----------------------" );
				$( "#error" ).append( data.results[x][y] + "</br>" );
			}
			
		}
		$( "#success" ).append( "<br />" );
	}
}