<?php
// src/Api.php

class Api {
    public function getGreeting(string $name): array {
        return [
            'message' => "Hello, $name!",
            'status' => 'success'
        ];
    }
}

