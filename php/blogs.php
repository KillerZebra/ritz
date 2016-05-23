<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

	$action = $_POST["action"];

	switch ($action)
	{
		case 'getBlog':
			getBlog();
			break;
		case 'addBlog':
			addBlog();
			break;
		case 'allBlogs':
			allBlogs();
			break;
		case 'removeBlog':
			removeBlog();
			break;
		case 'search':
			searchTitles();
			break;
	}



	function getBlog()
	{
		include "../../database/connectToDB.php";

		$dataArray = array();
		$numberOfBlogs = 0;

		$page = $_POST["pages"];
		$offset = ($page * 3) - 3;

		if(isset($_POST['title']))
		{
			$value = $_POST["title"];
			$query = "SELECT SQL_CALC_FOUND_ROWS * FROM `blogs` WHERE `title` LIKE '%$value%' ORDER BY `date` DESC LIMIT 3 OFFSET $offset";
			$query2 = "SELECT FOUND_ROWS() AS count" ;

		}
		else
		{
			$query = "SELECT SQL_CALC_FOUND_ROWS * FROM `blogs` ORDER BY `date` DESC LIMIT 3 OFFSET $offset";
			$query2 = "SELECT FOUND_ROWS() AS count" ;

		}

		$result = $connect->query($query);
		$result2 = $connect->query($query2);

		$numberOfBlogs = $result2->fetch_assoc();
		$dataArray[] = $numberOfBlogs;



		if($result->num_rows != 0)
		{

			
			while($row = $result->fetch_assoc())
			{
				$row['date'] = date("F j, Y", strtotime($row['date']));
				$dataArray[] = $row;
			}
			echo json_encode(array('blogs' => $dataArray));

		}

		$connect->close();
	}

	function addBlog()
	{
		include "../../database/connectToDB.php";
		$author = $_POST['author'];
		$date = date("Y-m-d");
		$title = $_POST['title'];
		$blog = $_POST['blog'];

		$query = "INSERT INTO `blogs`
					(`title` , `author` , `content` , `date`)
					VALUES
					('$title' , '$author' , '$blog' , '$date')";

		$result = $connect->query($query);

		$connect->close();
	}

	function allBlogs()
	{
		include "../../database/connectToDB.php";
		$query = "SELECT `title`, `author`, `date`, `blogID` FROM `blogs` ORDER BY `date` DESC";

		$result = $connect->query($query);

		if($result->num_rows != 0)
		{
			while($row = $result->fetch_assoc())
			{
				$row['date'] = date("F j, Y", strtotime($row['date']));
				$dataArray[] = $row;
			}
			echo json_encode(array('blogs' => $dataArray));
		}

		$connect->close();
	}

	function removeBlog()
	{
		include "../../database/connectToDB.php";
		$id = $_POST['blogId'];

		/* delete rows */
		$query = "DELETE FROM `blogs` WHERE `blogID`='$id' LIMIT 1";
		$connect->query($query);

		$connect->close();

	}




?>