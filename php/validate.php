<?php

	include "connectToDB.php";


	if(isset($_POST["email"]))
	{
		$email = $_POST["email"];
		if ($connect->connect_error) 
		{
	    	die("Connection failed: " . $connect->connect_error);
		}
		else
		{
			$query = "SELECT `email` FROM `accounts` WHERE `email` = '$email'";

			$result = mysqli_query($connect , $query);

			if (mysqli_num_rows($result) == 0)
			{
				echo json_encode("OK");
			}

		}
	}
	if(isset($_POST["username"]))
	{
		$username = $_POST["username"];
		if ($connect->connect_error) 
		{
	    	die("Connection failed: " . $connect->connect_error);
		}
		else
		{
			$query = "SELECT `username` FROM `accounts` WHERE `username` = '$username'";

			$result = mysqli_query($connect , $query);

			if (mysqli_num_rows($result) == 0)
			{
				echo json_encode("OK");
			}

		}
	}


?>