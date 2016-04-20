<?php
/*
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
*/
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
	}



	function getBlog()
	{
		include "../../database/connectToDB.php";

		$dataArray = array();
		$numberOfBlogs = 0;

		$page = $_POST["pages"];
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

		$result = mysqli_query($connect , $query);

		mysqli_close($connect);
	}

	function allBlogs()
	{
		include "../../database/connectToDB.php";
		$query = "SELECT title, author, date, blogID FROM `blogs` ORDER BY `date` DESC";

		$result = mysqli_query($connect, $query);

		if(mysqli_num_rows($result) != 0)
		{
			while($row = mysqli_fetch_assoc($result))
			{
				$row['date'] = date("F j, Y", strtotime($row['date']));
				$dataArray[] = $row;
			}
			echo json_encode(array('blogs' => $dataArray));
		}

	}

	function removeBlog()
	{
		include "../../database/connectToDB.php";
		$id = $_POST['blogId'];

		/* delete rows */
		mysqli_query($connect, "DELETE FROM `blogs` WHERE `blogID`='$id' LIMIT 1");
	}


?>