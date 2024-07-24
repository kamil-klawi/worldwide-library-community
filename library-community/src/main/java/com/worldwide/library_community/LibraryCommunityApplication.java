package com.worldwide.library_community;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync(proxyTargetClass = true)
public class LibraryCommunityApplication {

	public static void main(String[] args) {
		SpringApplication.run(LibraryCommunityApplication.class, args);
	}

}
