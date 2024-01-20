package com.product.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, String>{
	
	public User findByemail(String email);

}
