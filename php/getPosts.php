<?php
    session_start();
    //create database connection
    require 'createConnection.php';
    //import the user file to have access to the user class
    require_once "Post.php";

    $query = "SELECT * FROM posts WHERE(PostID != 1);";
    $response = $db->query($query);
    $array = array();
    while($row = mysqli_fetch_array($response, MYSQLI_ASSOC)){
        $post = new Post($row['PostID'], $row['Title'], $row['Content'], $row['DateCreated'], $row['UserID'], $row['HouseID']);
        array_push($array, $post);
    }

    echo json_encode($array);
?>