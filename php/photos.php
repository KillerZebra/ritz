<?php

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	

	if(isset($_POST['action']))
	{
		$action = $_POST['action'];
	}
	else
	{
		var_dump($_FILES);
		//$action = $_FILES['file']['action'];
	}

	switch ($action)
	{
		case 'checkExist':
			checkForDupes();
			break;
		case 'uploadFile':
			uploadFile();
			break;
	}
	
	
		/*
		if(isset($_FILES['files']))
		{

			$temp = $_SERVER['DOCUMENT_ROOT'] . "/images/uploads/";
			foreach ($_FILES["files"]["error"] as $key) 
			{

        			$tmp_name = $_FILES["files"]["tmp_name"][$key];
        			$name = $_FILES["files"]["name"][$key];
        			move_uploaded_file($tmp_name, "$temp/$name");
  				
			}

		}
		*/
	
	

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
		echo "hi";

		//echo $files;
	}

?>