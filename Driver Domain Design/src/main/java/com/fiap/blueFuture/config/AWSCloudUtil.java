package com.fiap.blueFuture.config;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;

import java.io.*;

public class AWSCloudUtil {

    private AWSCredentials awsCredentials(String accessKey, String secretKey) {
        return new BasicAWSCredentials(accessKey, secretKey);
    }

    private AmazonS3 awsS3Client(String accessKey, String secretKey) {
        AmazonS3 s3Client = AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(awsCredentials(accessKey, secretKey)))
                .withRegion(Regions.SA_EAST_1)
                .build();
        return s3Client;
    }

    public void uploadFileToS3(String fileName, byte[] fileBytes, String accessKey, String secretKey, String bucket) {
        AmazonS3 s3Client = awsS3Client(accessKey, secretKey);

        File file = new File(fileName);

        try (OutputStream os = new FileOutputStream(file)) {
            os.write(fileBytes);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        s3Client.putObject(bucket, fileName, file);
    }

    public S3ObjectInputStream downloadFileFromS3(String fileName, String accessKey, String secretKey, String bucket) {
        AmazonS3 s3Client = awsS3Client(accessKey, secretKey);
        S3Object s3Object = s3Client.getObject(bucket, fileName);
        S3ObjectInputStream inputStream = s3Object.getObjectContent();
        return inputStream;
    }
}
