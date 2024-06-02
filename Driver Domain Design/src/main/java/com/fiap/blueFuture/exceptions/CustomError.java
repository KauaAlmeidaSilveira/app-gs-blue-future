package com.fiap.blueFuture.exceptions;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CustomError {
    private Instant timestamp;
    private Integer status;
    private String error;
    private String path;
}
