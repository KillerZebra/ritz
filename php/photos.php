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
		$group = $_POST['groupName'];
		$album = $_POST['albumName'];
		$location = $_SERVER['DOCUMENT_ROOT'] . "ritz/images/uploads/" . $group . "/" . $album;
		$error = array();
		
			foreach ($_FILES["photo"]["tmp_name"] as $key => $value)
			{
				//var_dump($_FILES);
				if(!empty($_FILES["photo"]["error"][$key]))
				{
					$error[] = $_FILES["photo"]["error"][$key] ;
				}
				if($_FILES["photo"]["size"][$key] > 2097152)
				{
					$error[] = "File is too large. Limit 2 MB";
				}

				print_r($error);
				if(empty($error))
				{
					$temp = $_FILES["photo"]["tmp_name"][$key];
					$name = $_FILES["photo"]["name"][$key];
					$fileLocation = $location . "/" . $name;
					if (!file_exists($location)) 
					{
		    			mkdir($location, 0777, true);
		    			echo "make the locatuin?";
					}
					else
					{
						if(file_exists($fileLocation))
						{
							$error[] = "The file $name already exists. Please rename the file.";
						}
					}

					if(empty($error))
					{
						move_uploaded_file($temp, $location."/".$name);

					}
					
				}
				
			}
		

	}

?>