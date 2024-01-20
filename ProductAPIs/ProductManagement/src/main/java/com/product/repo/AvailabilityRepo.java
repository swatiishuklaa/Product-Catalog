package com.product.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.product.model.Availability;

public interface AvailabilityRepo extends JpaRepository<Availability,Integer>{

	@Query("from Availability a where a.pinCode=:pincode")
	public List<Availability> findByPinCode(int pincode);
}
