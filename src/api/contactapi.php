<?php
require ("db.php");

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $sql = "select * from contact";
    if (isset($_GET['id'])) {
        $product_id = $_GET['id'];
        $sql = $sql . " where id=" . $product_id;
    }
    $p = $conn->query($sql);
    $rows = [];
    if ($p->num_rows) {
        while ($row = $p->fetch_assoc()) {
            $rows[] = $row;
        }
    }
    echo json_encode($rows);
}
