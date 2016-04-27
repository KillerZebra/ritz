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
			case 'uploadFile':
				uploadFile();
				break;
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
		var_dump($_FILES);
		//echo $files;
	}

?>