<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit;
}


function dlt ($id){
   

    $conn = new mysqli("localhost", "root", "", "r53_ng_car");
    $sql = "DELETE FROM `customer` WHERE id = '$id'";
    $q = $conn->query($sql);


    return json_encode(['success:'=> 'Successfully Deleted']);

}
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Get the ID from the request URL
    $url_parts = parse_url($_SERVER['REQUEST_URI']);
    parse_str($url_parts['query'], $query);
    $id = $query['id'];
  
    // Call the deleteItem function with the ID
    $result = dlt($id);
  
    // Set the response headers and body
    header('Content-Type: application/json');
    if (isset($result['error'])) {
      http_response_code(500);
    } else {
      http_response_code(200);
    }
    echo $result;
  }



?>