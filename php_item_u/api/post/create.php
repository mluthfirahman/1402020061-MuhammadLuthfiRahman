<?php
    //Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,
    Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Post.php';

    //Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    //instantiate blog post objext
    $post = new Post($db);

    //Get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    $post->id = $data->id;
    $post->category_id = $data->category_id;
    $post->category_name = $data->category_name;
    $post->item_name = $data->item_name;
    $post->stock = $data->stock;

    //Create post
    if($post->create()){
        echo json_encode(
            array('message' => 'Post Created')
        );
    }else{
        echo json_encode(
            array('message' => 'Post Not Created')
        );
    }

    