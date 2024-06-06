package com.fiap.blueFuture.services.ExternalAPI.aws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class FileStoreServiceImpl {

    @Autowired
    FileStoreService fileStoreService;

    @Value("${aws.access.key}")
    private String AWS_ACCESS_KEY;
    @Value("${aws.secret.key}")
    private String AWS_SECRET_KEY;
    @Value("${aws.s3.bucket}")
    private String AWS_BUCKET;


}
