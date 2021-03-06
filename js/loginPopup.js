
	$( "#loginTrigger" ).click(function()
	{
		$( "#LoginFormPopup" ).fadeIn();
		$( "#LoginFormPopup" ).css({ "visibility":"visible" , "display":"block" });
	});

	$( "#closeLogin" ).click(function()
	{
		$( "#LoginFormPopup" ).css({ "visibility":"hidden" , "display":"block" });
	});

	//this lets you press enter to submit
	$( 'input' ).keypress(function ( e ) 
	{
		//keypress "E" 13 is enter
  		if ( e.which == 13 ) 
  		{
			var isValid = validate();
			if( isValid == "valid" )
			{
				login();
			}
			return false;
  		}
	});


	$( "#submit" ).click(function()
	{
		var isValid = validate();
		if( isValid == "valid" )
		{
			login();
		}

		
	});


	function login()
	{
		var username = $( "#login" ).val();
		var pass = $( "#password" ).val();

		//logins into account		
		$.ajax(
		{
			type: "POST",
			url: "php/accounts.php",
			data: {action:"login", username:username,pass:pass},
			dataType: "JSON",
			success: function( data )
			{
				$( "#loginTrigger" ).html( 'Welcome ' + data.info[ 'fName' ]);
	            $( "#register a" ).html( "Logout" );
	            $( "#register a" ).attr( "href", "php/logout.php" );
				$( "#navigation ul li:last" ).after( "<li><a href='portal.html'>Portal</a></li>" );
				$( "#LoginFormPopup" ).css({ "visibility":"hidden" , "display":"block" });


			}

		});
	}

	function validate()
	{
		if( $( "#password" ).val() != "" && $( "#login" ).val() != "" )
		{
			return "valid";
		}
		else
		{
			if( $( "#password" ).val() == "" ) 
			{
				$( "#password" ).css( "border", "2px solid #FF0000" );
			}
			if( $( "#login" ).val() == "" )
			{
				$( "#login" ).css( "border", "2px solid #FF0000" );
			}
		}
	}

