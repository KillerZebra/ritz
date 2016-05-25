<?php

/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/


	$action = $_POST[ 'action' ];

	switch ( $action )
	{
		case "register":
		{
			registerAccount();
			break;
		}
		case "validation":
		{
			validation();
			break;
		}
		case "login":
		{
			tryLogin();
			break;
		}
		case "updateEmail":
		{
			updateEmail();
			break;
		}
		case "updatePassword":
		{
			updatePassword();
			break;
		}

	}


	function registerAccount()
	{
		include "../../database/connectToDB.php";

		$fName = $_POST[ "fName" ];
		$lName = $_POST[ "lName" ];
		$uName = $_POST[ "uName" ];
		$email = $_POST[ "email" ];
		$pass  = $_POST[ "pass" ];
		$hash = md5( $salt.$pass );


		if ( $connect->connect_error ) 
		{
	    	die( "Connection failed: " . $connect->connect_error );
		}
		else
		{
			$query = "INSERT INTO `accounts`
						(`firstName` , `lastName` , `username` , `email` , `password`)
						VALUES 
						('$fName' , '$lName' , '$uName' , '$email' , '$hash')";

			$result = $connect->query( $query );

			if ( $result )
			{
				echo "success";
			}
			else
			{

				echo "fail";
			}
		}



		$connect->close();
	}

	function validation()
	{
		include "../../database/connectToDB.php";

		//check if email exists
		if( isset($_POST[ "email" ] ) )
		{
			$email = $_POST["email"];
			if ( $connect->connect_error ) 
			{
		    	die( "Connection failed: " . $connect->connect_error );
			}
			else
			{
				$query = "SELECT * FROM `accounts` WHERE `email` = '$email'";

				$result = $connect->query( $query );

				if ( $result->num_rows == 0 )
				{
					echo json_encode(array( 'type' => 'valid', 'message' => "Email not used" ) );
				}
				else
				{
					echo json_encode(array( 'type' => 'error', 'message' => "Email already registered" ) );

				}

			}

		}

		//checks if username exist
		if( isset($_POST[ "username" ]) )
		{
			$username = $_POST[ "username" ];
			if ( $connect->connect_error ) 
			{
		    	die("Connection failed: " . $connect->connect_error);
			}
			else
			{
				$query = "SELECT * FROM `accounts` WHERE `username`='$username'";

				$result = $connect->query( $query );

				if ( $result->num_rows == 0 )
				{
					echo json_encode(array( 'type' => 'valid', 'message' => "Username not used" ) );
				}
				else
				{
					echo json_encode(array( 'type' => 'error', 'message' => "Username already registered" ) );

				}

			}
		}
		$connect->close();

	}

	function tryLogin()
	{
		session_start();
		session_set_cookie_params( 6000 );
		include "../../database/connectToDB.php";
	
		$uName = $_POST[ "username" ];
		$pass = $_POST[ "pass" ];
		$hash = md5( $salt.$pass );

		$query = "SELECT * FROM `accounts` WHERE `username` = '$uName' AND `password` = '$hash'";

		$result = $connect->query( $query );

		if ($result->num_rows == 0)
		{
			echo json_encode(array( 'type' => 'error', 'message' => "Bade Password" ) );
		}
		else
		{
			$row = $result->fetch_array( MYSQLI_ASSOC );
	        $_SESSION[ 'username' ] = $row[ 'username' ];
	        $_SESSION[ 'fName' ] = $row[ 'firstName' ];
	       	$_SESSION[ 'level' ] = $row[ 'level' ];
	       	$_SESSION[ 'id' ] = $row[ 'id' ];



	        echo json_encode(array( "info" => $_SESSION ) );
			
		}

		$connect->close();

	}

	function updateEmail()
	{
		include "../../database/connectToDB.php";

		$id = $_POST[ 'id' ];
		$new = $_POST[ 'newInfo' ];
		$current = $_POST[ 'current' ];

		$getquery = "SELECT `email` FROM `accounts` WHERE `email`='$current' AND `id`='$id' LIMIT 1";
		$result = $connect->query( $getquery );

		if( $result->num_rows == 1 )
		{
			$row = $result->fetch_assoc();


 			$query = "UPDATE `accounts` SET `email`='$new' WHERE `id`='$id' LIMIT 1";
 			$reuslt = $connect->query( $query );

 			if( $result )
 			{
			 	echo json_encode(array( 'type' => 'success', 'message' => "Successfully updated email" ) );
 			}


		}
		else
		{
			 echo json_encode(array( 'type' => 'error', 'message' => "This email is not associated with your account" ) );
		}

		$connect->close();

	}

	function updatePassword()
	{
		include "../../database/connectToDB.php";

		$current = $_POST[ 'current' ];
		$newPass  = $_POST[ 'newInfo' ];
		$id = $_POST[ 'id' ];

		$currentHash = md5( $salt.$current );
		$newHash = md5( $salt.$newPass );

		$getquery = "SELECT `password` FROM `accounts` WHERE `id`='$id' LIMIT 1";
		$result = $connect->query( $query );

		if( $result->num_rows == 1 )
		{
			$row = $result->fetch_assoc();

			if( $currentHash == $row[ 'password' ] )
			{
				$query = "UPDATE `accounts` SET `password`='$newHash' WHERE `id`='$id'";
				$result = $connect->query( $query );

				if( $result )
 				{
			 		echo json_encode(array( 'type' => 'success', 'message' => "Successfully updated Password" ) );
 				}
			}
			else
			{
				echo json_encode(array( 'type' => 'error', 'message' => "Current password does not match" ) );
			}
		}		
		
		$connect->close();

	}

?>