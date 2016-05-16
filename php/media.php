<?php

	
	$action = $_POST['action'];

	switch ($action)
	{
		case 'getKey':
			returnKey();
			break;

	}


	function returnKey()
	{
		include "../../database/connectToDB.php";
		echo json_encode($YTApiKey);
	}

?>