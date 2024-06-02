package com.fiap.blueFuture.exceptions.handler;

import com.fiap.blueFuture.exceptions.CustomError;
import com.fiap.blueFuture.exceptions.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class ControllerExceptionsHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<CustomError> ResourceNotFound(ResourceNotFoundException e, HttpServletRequest request){
        HttpStatus status = HttpStatus.NOT_FOUND;
        CustomError error = new CustomError(
                Instant.now(), status.value(), e.getMessage(), request.getRequestURI()
        );
        return ResponseEntity.status(status).body(error);
    }

}
