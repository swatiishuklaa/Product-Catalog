package com.product.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.product.model.product;
import com.product.repo.ProductRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

	@Autowired
	private ProductRepo repo;
	
	@GetMapping("/product")
	 public List<product> getProducts() {
       		return this.repo.findAll();
   	}
	 
	@GetMapping("/name/{productName}")
	 public List<product> getProductsByProductName(@PathVariable String productName) {
       		 return this.repo.findByProductName(productName);
    	}
	 
	@GetMapping("/search/{data}")
	public List<product> search(@PathVariable String data) {
	        return this.repo.search(data);
	}
	 
	 @GetMapping("/id/{productCode}")
	 public List<product> getProductsByProductCode(@PathVariable int productCode) {
        	return this.repo.findByCode(productCode);
    	}
	 
	 @GetMapping("/brand/{productBrand}")
	 public List<product> getProductsByProductBrand(@PathVariable String productBrand) {
        	return this.repo.findByBrand(productBrand);
    	}
	 
	 @GetMapping("/details/{id}")
	 public product getProductsDetail(@PathVariable String id) {
        	return this.repo.findByProductCode(id);
    	}
	 
	 @GetMapping("/price/{id}")
	 public double getProductsPrice(@PathVariable String id) {
        	return this.repo.findByProductCode(id).getPrice();
    	}
	 
	
}
