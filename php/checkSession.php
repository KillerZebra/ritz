<?php
	session_start();


	if(empty($_SESSION['username']) ) 
	{
		header("Location: ../index.html");
	}
	else 
	{
	    echo json_encode(array("info" => $_SESSION));

	}


?>