package com.product.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Availability {
	@Id
	int pinCode;
	
	public int getPinCode() {
		return pinCode;
	}
	public void setPinCode(int pinCode) {
		this.pinCode = pinCode;
	}
	
}
