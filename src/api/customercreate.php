<?php
// require 'db.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit;
}

require 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if (json_last_error() !== JSON_ERROR_NONE) {
  echo json_encode(['error' => 'Invalid JSON data']);
  exit();
}

$first_name = mysqli_real_escape_string($conn, $data['first_name']);
$last_name = mysqli_real_escape_string($conn, $data['last_name']);
$email = mysqli_real_escape_string($conn, $data['email']);
$pass = mysqli_real_escape_string($conn, $data['password']);
$repass = mysqli_real_escape_string($conn, $data['re_password']);

$query = "INSERT INTO customer (first_name, last_name, email, password, re_password) VALUES ('$first_name', '$last_name', '$email', '$pass', '$repass')";

if (mysqli_query($conn, $query)) {
    echo json_encode(['message' => 'Added successfully']);
  } else {
    echo json_encode(['error' => 'Add failed']);
  }

mysqli_close($conn);
