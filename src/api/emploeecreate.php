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

$name = mysqli_real_escape_string($conn, $data['name']);
$mobile = mysqli_real_escape_string($conn, $data['mobile']);
$nid = mysqli_real_escape_string($conn, $data['nid']);
$position = mysqli_real_escape_string($conn, $data['position']);
$shift = mysqli_real_escape_string($conn, $data['shift']);

$query = "INSERT INTO employee (name, mobile, nid, position, shift) VALUES ('$name', '$mobile', '$nid', '$position', '$shift')";

if (mysqli_query($conn, $query)) {
    echo json_encode(['message' => 'Added successfully']);
  } else {
    echo json_encode(['error' => 'Add failed']);
  }

mysqli_close($conn);
