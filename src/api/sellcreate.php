<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit;
}

require 'db.php';
$q = "select id, title,price from cars where 1";
$r = $conn->query($q);
$cars = [];
if($r->num_rows){
    while ($row = $r->fetch_assoc()){
        $cars[] = $row;
    }
}

echo json_encode(['cars' => $cars]);

$conn->close();