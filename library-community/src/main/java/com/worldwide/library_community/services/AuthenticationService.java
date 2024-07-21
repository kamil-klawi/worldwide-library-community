package com.worldwide.library_community.services;

import com.worldwide.library_community.domain.common.AuthenticationRequest;
import com.worldwide.library_community.domain.common.AuthenticationResponse;
import com.worldwide.library_community.domain.common.RegisterRequest;

public interface AuthenticationService {
    AuthenticationResponse register(RegisterRequest request);
    AuthenticationResponse authenticate(AuthenticationRequest request);
}
