package com.michaelmartins.dsdelivery.exception;

public class OrderWithoutProductsException extends RuntimeException {

    public OrderWithoutProductsException(String message) {
        super(message);
    }
}
