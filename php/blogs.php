<?php
	
	$dataArray = array();
	$numberOfBlogs = 0;
	include "../../database/connectToDB.php";

	$page = $_GET["pages"];
	$offset = ($page * 3) - 3;

	$query = "SELECT SQL_CALC_FOUND_ROWS * FROM `blogs` ORDER BY `date` DESC LIMIT 3 OFFSET $offset ";
	$query2 = "SELECT FOUND_ROWS()  AS count" ;

	$result = mysqli_query($connect , $query);
	$result2 = mysqli_query($connect , $query2);

	$numberOfBlogs = mysqli_fetch_assoc($result2);
	$dataArray[] = $numberOfBlogs;



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