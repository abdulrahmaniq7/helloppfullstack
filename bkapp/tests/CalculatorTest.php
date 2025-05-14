<?php
// tests/CalculatorTest.php

use PHPUnit\Framework\TestCase;

//echo "Current Directory: " . __DIR__ . "\n";
//echo "Calculated Path: " . __DIR__ . '/../src/Calculator.php' . "\n";

// Include the application code (Calculator class) you want to test
require_once __DIR__ . '/../src/Calculator.php';  

class CalculatorTest extends TestCase {
    private $data;
    public function testAdd() {
        $calculator = new Calculator();
	    $this->assertEquals(5, $calculator->add(2, 3));  // Assert that 2 + 3 equals 5
    }

    public function testSubtract(){
    	$calculator = new Calculator();
	$this->assertEquals(10, $calculator->subtract(20,10)); // Assert that 20 - 10 equals 10
    }

    public function testJson(){
	    $calculator = new Calculator();
	    $result = $calculator->checkArr();
	    $this->assertIsArray($result);
	    $this->assertArrayHasKey('status', $result);
	    $this->assertNotEmpty($result);
	    $this->assertCount(2, $result);
	    $this->assertSame('1', '1');
    }

    public function setUp():void{
    	//setup common test data
    	$this->data = array('load'=>100, 'memory'=>"2mb");
    	echo "-start- \n";
    }

    public function tearDown():void{
	//clear
	$this->data = array();
    	echo "-clear- \n";
    }
}
