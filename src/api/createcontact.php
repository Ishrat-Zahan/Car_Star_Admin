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

$name = $data['name'];
$email = $data['email'];
$phone = $data['phone'];
$messege = $data['messege'];


$query = "INSERT INTO contact (name, email,phone,messege) VALUES ('$name','$email','$phone','$messege')";
if (mysqli_query($conn, $query)) {
  echo json_encode(['message' => 'Added successful']);
} else {
  echo json_encode(['error' => 'Add failed']);
}

mysqli_close($conn);
