<?php

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

?>