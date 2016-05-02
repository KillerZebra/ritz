<?php

	ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL);
	
	

	if(isset($_POST['action']))
	{
		$action = $_POST['action'];
		switch ($action)
		{
			case 'uploadFile':
				uploadFile();
				break;
		}
	}


	function uploadFile()
	{
		include "../../database/connectToDB.php";
		$group = $_POST['groupName'];
		$album = $_POST['albumName'];
		$today = date('y-m-j');
		$preLoc = "/ritz/images/uploads/" . $group . "/" . $album;
		$location = $_SERVER['DOCUMENT_ROOT'] . $preLoc;
		$message = array();

			foreach ($_FILES["photo"]["tmp_name"] as $key => $value)
			{
				$x = 0;
				//var_dump($_FILES);
				if(!empty($_FILES["photo"]["error"][$key]))
				{
					$message[$key][$x] = "ERROR: " . $_FILES["photo"]["error"][$key];
					$x++;
				}
				if($_FILES["photo"]["size"][$key] > 2097152)
				{
					$message[$key][$x] = "ERROR: The file <b>$name</b> is too large. Limit 2 MB";
					$x++;

				}

				if(empty($message[$key]))
				{
					$temp = $_FILES["photo"]["tmp_name"][$key];
					$name = $_FILES["photo"]["name"][$key];
					if (!file_exists($location)) 
					{
		    			mkdir($location, 0777, true);

					}
					$preFile = $preLoc . "/" . $name;
					$fileLocation = $location . "/" . $name;
					if(file_exists($fileLocation))
					{
						$message[$key][$x] = "ERROR: The file <b>$name</b> already exists. Please rename the file.";
						$x++;

					}

					if(empty($message[$key]))
					{
						$query = "INSERT INTO `photos`
								(`photoURL` , `album` , `photogroup` , `date`)
								VALUES 
								('$preFile' , '$album' , '$group' , '$today')";
						$result = mysqli_query($connect, $query);
						if($result)
						{
							move_uploaded_file($temp, $fileLocation);
							$message[$key][$x] = "SUCCESS: The file <b>$name</b> was successfully uploaded";
						}
						else
						{
							$message[$key][$x] = "ERROR: Could not upload $name to database";

						}

					}

				}
			}
				
		echo json_encode(array('results' => $message));


	}

?>