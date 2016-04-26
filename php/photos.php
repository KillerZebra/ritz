<?php

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	

	if(isset($_POST['action']))
	{
		$action = $_POST['action'];

		switch ($action)
		{
			case 'checkExist':
				checkForDupes();
				break;
			case 'upload':
				uploadFile();
				break;
		}
	}
	else
	{
		if(!isset($_FILES['files']['error']))
		{
			$dir = "../images/uploads";
			$target_file = $dir . basename($_FILES["files"]["name"]);
		}
	
	}

	function checkForDupes()
	{
		include "../../database/connectToDB.php";

		$group = $_POST['groupName'];
		$album = $_POST['albumName'];
		$exists = array();

		$query = "SELECT * FROM `photos` WHERE `album`='$album' AND `photoGroup`='$group'";

		$results = mysqli_query($connect, $query);

		//checks to see if group exists in a album, if it does it comes back as true.
		if(mysqli_num_rows($results) > 0)
		{
			$exists[] = "true";
			echo json_encode($exists);
		}
		else
		{
			$exists[] = "false";
			echo json_encode($exists);		
		}


		mysqli_close($connect);
	}

	function uploadFile()
	{

				include "../../database/connectToDB.php";
		$group = $_POST['groupName'];
		$album = $_POST['albumName'];
		$name = $_POST['fileName'];


		//echo $files;
	}

?>