<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

	$action = $_POST['action'];

	switch ($action)
	{
		case "register":
			registerAccount();
			break;
		case "validation":
			validation();
			break;
		case "login":
			tryLogin();
			break;

	}


	function registerAccount()
	{
		include "../../database/connectToDB.php";

		$fName = $_POST["fName"];
		$lName = $_POST["lName"];
		$uName = $_POST["uName"];
		$email = $_POST["email"];
		$pass  = $_POST["pass"];
		$hash = md5($salt.$pass);


		if ($connect->connect_error) 
		{
	    	die("Connection failed: " . $connect->connect_error);
		}
		else
		{
			$query = "INSERT INTO `accounts`
				(`firstName` , `lastName` , `username` , `email` , `password`)
				VALUES 
				('$fName' , '$lName' , '$uName' , '$email' , '$hash')";

			$result = mysqli_query($connect , $query);

			if ($result)
			{
				echo "success";
			}
			else
			{

				echo "fail";
			}
		}



		mysqli_close($connect);
	}

	function validation()
	{
		include "../../database/connectToDB.php";

		//check if email exists
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

		//checks if username exist
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
	}

	function tryLogin()
	{
		session_start();
		session_set_cookie_params(6000);
		include "../../database/connectToDB.php";
	
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

			$row = mysqli_fetch_array($result);

	        $_SESSION['username'] = $row['username'];
	        $_SESSION['fName'] = $row['firstName'];
	       	$_SESSION['level'] = $row['level'];


	        echo json_encode(array("info" => $_SESSION));
			
		}

	}

?>