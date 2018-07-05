package com.example.S2WebDevjavaservercbishop.services;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.S2WebDevjavaservercbishop.models.User;

@RestController
public class UserService {
	// http://localhost:8080/register
	
	@PostMapping("/register")
	public User register(User user) {
		return user;
	}
}
