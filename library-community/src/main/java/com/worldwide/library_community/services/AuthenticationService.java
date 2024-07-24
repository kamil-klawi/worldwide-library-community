package com.worldwide.library_community.services;

import com.worldwide.library_community.domain.common.AuthenticationRequest;
import com.worldwide.library_community.domain.common.AuthenticationResponse;
import com.worldwide.library_community.domain.common.RegisterRequest;
import jakarta.mail.MessagingException;

public interface AuthenticationService {
    void register(RegisterRequest request) throws MessagingException;
    AuthenticationResponse authenticate(AuthenticationRequest request);
    void activateAccount(String token) throws MessagingException;
}
