<?php
header('Content-Type: application/json');

// Retrieve posted data
$postData = file_get_contents("php://input");
$request = json_decode($postData);

// Save the review to a file (you can use a database in a production environment)
$reviewsFile = 'reviews.json';

// Load existing reviews
$reviews = file_exists($reviewsFile) ? json_decode(file_get_contents($reviewsFile), true) : [];

// Add the new review
$reviews[] = [
    'restaurantName' => $request->restaurantName,
    'rating' => $request->rating,
    'comment' => $request->comment,
];

// Save the updated reviews
file_put_contents($reviewsFile, json_encode($reviews));

// Return a response
echo json_encode(['success' => true]);
?>