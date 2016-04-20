<?php
	session_start();
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/

	if(empty($_SESSION['username']) ) 
	{
		header("Location: ../index.html");
	}
	else 
	{
	    echo json_encode(array("info" => $_SESSION));

	}


?>