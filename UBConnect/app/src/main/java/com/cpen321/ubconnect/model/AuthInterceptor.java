package com.cpen321.ubconnect.model;

import java.io.IOException;

import okhttp3.Credentials;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;

public class AuthInterceptor implements Interceptor {

    private String mCredentials;

    public AuthInterceptor(String username, String token) {
        mCredentials = Credentials.basic(username, token);
    }

    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();
        Request authenticatedRequest = request.newBuilder()
                .header("Authorization", mCredentials)
                .build();

        return chain.proceed(authenticatedRequest);
    }


}