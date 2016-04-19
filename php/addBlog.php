<?php
	
	include_once("connectToDB.php");

	$author = $_POST['author'];
	$date = date("Y-m-d");
	$title = $_POST['title'];
	$blog = $_POST['blog'];

	$query = "INSERT INTO blogs
				(`title` , `author` , `content` , `date`)
				VALUES
				('$title' , '$author' , '$blog' , '$date')";

	$result = mysqli_query($connect , $query);

	mysqli_close($connect);



?>