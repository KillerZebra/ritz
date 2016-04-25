<?php

	$action = $_POST['action'];

	switch ($action)
	{
		case 'checkExist':
			checkForDupes();
			break;
	}


	function checkForDupes()
	{
		include "../../database/connectToDB.php";

		$group = $_POST['groupName'];
		$album = $_POST['albumName'];

		$query = "SELECT * FROM `photos` WHERE `album`='$group && `group`='$group'";
	}

?>