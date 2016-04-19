<?php
	
	$dataArray = array();
	$numberOfBlogs = 0;
	include "../../database/connectToDB.php";

	$page = $_GET["pages"];

	$query = "SELECT SQL_CALC_FOUND_ROWS * FROM `blogs` ORDER BY `date` DESC ";

	$result = mysqli_query($connect , $query);




	if(mysqli_num_rows($result) != 0)
	{

		
		while($row = mysqli_fetch_assoc($result))
		{
			$row['date'] = date("F j, Y", strtotime($row['date']));
			$dataArray[] = $row;
		}
		echo json_encode(array('blogs' => $dataArray));

	}




?>