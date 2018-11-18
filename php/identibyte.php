<?php
/**
 * Using identibyte in PHP
 *
 * This example shows how you can integrate Identibyte with a PHP
 * application by making a simple HTTP request to the /checks endpoint
 * to see if an email is disposable.
 */

// Set the email address and API token
$email = $argv[1] ? $argv[1] : "email@mailinator.com";
$token = "ce36ced7ee8ade136f6892c5fe11641c";
$api_url = "https://identibyte.com/check/" . $email . "?api_token=" . $token;

// Make the API request to Identibyte
$request = file_get_contents($api_url, false);
$response = json_decode($request);
$disposable = $response->email->disposable === true ? "Yes" : "No";

// Print the response
echo "Is " . $email . " disposable? \r\n";
echo $disposable;
?>
