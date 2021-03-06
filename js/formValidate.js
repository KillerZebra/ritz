
var timer;

	$( "#submit" ).click(function( event )
	{
		var error = 0; 
		var inputs = $( ":input" );

		//if any "X"s appear
		if($( "#loading2" ).attr( 'src' ) != 'images/check.png' && $( "#loading1" ).attr( 'src' ) != 'images/check.png' )
		{
			error++;
		}

		//if email and username both valid
		if( error == 0 )
		{
			for(var x = 0; x < inputs.length - 2 ; x++ )
			{
				var id = inputs[x].id;
				var val = inputs[x].value;


				if( val == "" )
				{
					$( "#" + id ).css( "border", "2px solid #FF0000" );
					error++;
				}
				if ( id == "email" )
				{
					if( !isValidEmailAddress(val) )
					{
						$( "#" + id ).css( "border", "2px solid #FF0000" );
						error++;
					}
				}
				if( id == "pass" )
				{
					if(val != inputs[x+1].value)
					{
						$( "#" + id ).css( "border", "2px solid #FF0000" );
						$( "#cpass").css("border", "2px solid #FF0000" );
						error++;

					}
				}
			}

			//if everything is there
			if( error == 0 )
			{
				var fName = $( "#fName" ).val();
				var lName = $( "#lName" ).val();
				var uName = $( "#uName" ).val();
				var email = $( "#email" ).val();
				var password = $( "#pass" ).val();


				$.ajax(
				{
					type: "POST",
			    	url : "php/accounts.php",
			    	data: {action:"register", fName:fName, lName:lName, uName:uName, email:email, pass:password},
			    	dataType: "JSON",
					success: function( data )
			    	{
			    		$( "#regForm" ).clearForm();
			    		alert( "Account Successfully Created" );
			    	}

				}); 

			}
			else
			{
				//event.preventDefault();
			}
		}
		else
		{
			//event.preventDefault();

		}

	});

$( "#email" ).keyup(function()
{
	clearTimeout( timer ); 
	$( "#loading2" ).attr( 'src', 'images/loading.gif' );
	$( "#loading2" ).css({ "visibility":"visible" });
	timer = setTimeout( checkEmail, 2000 );


});

$( "#uName" ).keyup(function()
{
	clearTimeout( timer ); 
	$( "#loading1" ).attr( 'src', 'images/loading.gif' );
	$( "#loading1" ).css({ "visibility":"visible" });
	timer = setTimeout( checkUsername, 2000 );


});


function checkEmail()
{
	var email = $( "#email" ).val();

	if( isValidEmailAddress( email ) )
	{
		//checks if email is already in the database
		$.ajax(
		{
			url : "php/accounts.php",
			type : "POST",
		    dataType : "JSON",
			data : {action:"validation", email:email},
			success: function( data )
			{
				if( data.type == "valid" )
				{
					$( "#email" ).css( "border", "none" );
					$( "#loading2" ).attr( 'src', 'images/check.png' );
				}
				else
				{
					$( "#loading2" ).attr( 'src', 'images/close.png' );
					$( "#email" ).css( "border", "2px solid #FF0000" );
				}
			},
			error: function(error)
			{
				$( "#email" ).css( "border", "none" );
				$( "#loading2" ).attr( 'src', 'images/check.png' );
			}
		});
	}
	else
	{
		$( "#loading2" ).attr( 'src', 'images/close.png' );
		$( "#email" ).css( "border", "2px solid #FF0000" );		
	}



};

function checkUsername()
{
	var username = $( "#uName" ).val();

	//checks to see if username exists in database
	$.ajax(
	{
		url : "php/accounts.php",
		type : "POST",
	    dataType : "JSON",
		data : {action:"validation", username:username},
		success: function( data )
		{
			if( data.type == "valid" )
			{
				$( "#loading1" ).attr( 'src', 'images/check.png' );
				$( "#uName" ).css( "border", "none" );
			}
			else
			{
				$( "#loading1" ).attr( 'src', 'images/close.png' );
				$( "#uName" ).css( "border", "2px solid #FF0000" );
			}

		},
		error: function(error)
		{
			$( "#loading1" ).attr( 'src', 'images/check.png' );
			$( "#uName" ).css( "border", "none" );
		}

	});



};

function isValidEmailAddress( emailAddress ) 
{
   	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
   	return pattern.test( emailAddress );
};