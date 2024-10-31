<?php
// Database connection settings
$servername = "sql12.freesqldatabase.com"; // Your database server
$username = "sql12739013"; // Your database username
$password = "rs7F4GCrea"; // Your database password
$dbname = "sql12739013"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the JSON data from the request
$data = json_decode(file_get_contents('php://input'), true);

$name = $conn->real_escape_string($data['name']);
$email = $conn->real_escape_string($data['email']);
$phone = $conn->real_escape_string($data['phone']);
$message = $conn->real_escape_string($data['message']);
$hire = $conn->real_escape_string($data['hire']);
$date = date("Y-m-d H:i:s"); // Current date and time

// Insert the data into the database
$sql = "INSERT INTO your_table_name (name, email, phone, message, hire, date_time) VALUES ('$name', '$email', '$phone', '$message', '$hire', '$date')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error', 'message' => $conn->error]);
}

$conn->close();
?>
