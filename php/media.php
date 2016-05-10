<?php

	
	$action = $_POST['action'];

	switch ($action)
	{
		case 'getAPIKey':
			returnKey();
			break;

	}


	function returnKey()
	{
		include "../../database/connectToDB.php";
		echo json_encode($YTapiKey);
	}

?>