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

$customer_id = isset($data['customer_id']) ? mysqli_real_escape_string($conn, $data['customer_id']) : '';
$car_id = isset($data['car_id']) ? mysqli_real_escape_string($conn, $data['car_id']) : '';
$employee_id = isset($data['employee_id']) ? mysqli_real_escape_string($conn, $data['employee_id']) : '';
$date = isset($data['date']) ? mysqli_real_escape_string($conn, $data['date']) : '';
$place = isset($data['place']) ? mysqli_real_escape_string($conn, $data['place']) : '';

$query = "INSERT INTO report (customer_id, car_id, employee_id, date, place) VALUES ('$customer_id', '$car_id', '$employee_id', '$date', '$place')";

if (mysqli_query($conn, $query)) {
    echo json_encode(['message' => 'Report Added successfully']);
} else {
    echo json_encode(['error' => 'Add failed']);
}

mysqli_close($conn);
