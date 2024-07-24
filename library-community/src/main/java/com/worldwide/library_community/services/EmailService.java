package com.worldwide.library_community.services;

import jakarta.mail.MessagingException;

public interface EmailService {
    void sendEmail(String to, String username, String emailTemplate, String confirmationUrl, String activationCode, String subject) throws MessagingException;
}
