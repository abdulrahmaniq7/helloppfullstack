<?php
// tests/ApiTest.php

use PHPUnit\Framework\TestCase;

// Include the API class
require_once __DIR__ . '/../src/Api.php';

class ApiTest extends TestCase {
    private $api;

    protected function setUp(): void {
        $this->api = new Api();
    }

    public function testGetGreeting() {
        $response = $this->api->getGreeting('Abdul');
        
        // Assert that the response is an array
        $this->assertIsArray($response);
echo "apitest";
        // Assert the response has 'message' and 'status'
        $this->assertArrayHasKey('message', $response);
        $this->assertArrayHasKey('status', $response);

        // Assert the values
        $this->assertEquals('Hello, Abdul!', $response['message']);
        $this->assertEquals('success', $response['status']);
    }

    public function testGetGreetingWithEmptyName() {
        $response = $this->api->getGreeting('');
        
        $this->assertEquals('Hello, !', $response['message']);
    }
}

