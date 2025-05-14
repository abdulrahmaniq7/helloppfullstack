<?php
// Calculator.php

class Calculator {
    public function add(int $a, int $b): int {
        return $a + $b;
    }

    public function subtract(int $a, int $b){
    	return $a-$b;
    }

    public function checkArr(){
    	return ["status"=>["errorcode"=>1001, "msg"=>"success"], "body"=>null];
    }
}
