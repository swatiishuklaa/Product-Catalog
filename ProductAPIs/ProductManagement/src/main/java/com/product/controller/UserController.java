package com.product.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.model.User;
import com.product.repo.UserRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserRepo repo; 
	
	@GetMapping("/")
	public String home() {
		return "<h1>Home</h1>";
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userData){	
		User user = repo.findByemail(userData.getEmail());
		if(user.getPassword().equals(userData.getPassword())) {
			return ResponseEntity.ok(user);
		}
		return (ResponseEntity<?>)ResponseEntity.internalServerError();
		
	}
	
	@PostMapping("/signup")
	public ResponseEntity<User> registerUser(@RequestBody User userData) {
		return ResponseEntity.ok(repo.save(userData));
	}
	
}
