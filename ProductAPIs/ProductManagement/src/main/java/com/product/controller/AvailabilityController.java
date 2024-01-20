package com.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.product.model.Availability;

import com.product.repo.AvailabilityRepo;

@RestController

@CrossOrigin
public class AvailabilityController {
	
	@Autowired
	private AvailabilityRepo repo;
	
	@GetMapping("/availability")
	public List<Availability> getAvailability(@RequestParam(value="pincode" , required=false) int pincode,@RequestParam(value="productCode" , required=false) int productCode){
		List<Availability> a = repo.findByPinCode(pincode);
		if(a!=null) {
			return a;
		}
		return (List<Availability>) ResponseEntity.internalServerError();
	}
	
}
