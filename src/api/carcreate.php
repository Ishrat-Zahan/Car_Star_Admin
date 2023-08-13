<?php
require 'db.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit;
}


$data = json_decode(file_get_contents('php://input'), true);

if (json_last_error() !== JSON_ERROR_NONE) {
  echo json_encode(['error' => 'Invalid JSON data']);
  exit();
}

$title = $data['title'];
$price = $data['price'];
$d_price = $data['d_price'];
$des = $data['description'];


$query = "INSERT INTO cars (title, price,d_price,description) VALUES ('$title','$price','$d_price','$des')";

if (mysqli_query($conn, $query)) {
  echo json_encode(['message' => 'Added successful']);
} else {
  echo json_encode(['error' => 'Add failed']);
}

mysqli_close($conn);
