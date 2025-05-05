<?php
require 'vendor/autoload.php';
require 'config.php';

use Firebase\JWT\JWT;

header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);
$email = $data['email'];
$password = $data['password'];

// Very basic query (use prepared statements in production)
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
$stmt->execute([$email, $password]);
$user = $stmt->fetch();

if ($user) {
    $payload = [
        'email' => $email,
        'exp' => time() + 3600
    ];
    $jwt = JWT::encode($payload, $secretKey, 'HS256');
    echo json_encode(['token' => $jwt]);
} else {
    http_response_code(401);
    echo json_encode(['error' => 'Invalid credentials']);
}

