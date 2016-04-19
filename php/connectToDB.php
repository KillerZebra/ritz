<?php
	$servername = "localhost";
	$dbUsername = "jeff";
	$dbPassword = "jeffiscool";
	$dbName = "ritz";
	$salt = "fdkniujewBF9842HGF8ORBVOISAB";


	// Create connection
	$connect = new mysqli($servername, $dbUsername, $dbPassword , $dbName);


	/*
	if ($connect->connect_error) 
	{
    	die("Connection failed: " . $connect->connect_error);
	}
	echo "Connected successfully";
	*/
?> 