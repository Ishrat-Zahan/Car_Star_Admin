<?php
require ("db.php");

header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $sql = "select * from cars";
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
