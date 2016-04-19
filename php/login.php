<?php

	include "connectToDB.php";
	session_set_cookie_params(6000);

	session_start();
	

	if(isset($_POST["username"]) && isset($_POST["pass"]))
	{
		$uName = $_POST["username"];
		$pass = $_POST["pass"];
		$hash = md5($salt.$pass);



		
		$query = "SELECT * FROM `accounts` WHERE `username` = '$uName' AND `password` = '$hash'";

		$result = mysqli_query($connect , $query);

		if (mysqli_num_rows($result) == 0)
		{

		        echo json_encode("bad password");


			
		}
		else
		{
			session_regenerate_id();

			$row = mysqli_fetch_array($result);

	        $_SESSION['username'] = $row['username'];
	        $_SESSION['fName'] = $row['firstName'];
	       	$_SESSION['level'] = $row['level'];


	        echo json_encode(array("info" => $_SESSION));
	
		}
	}


?>