package com.product.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.product.model.product;

public interface ProductRepo extends JpaRepository<product,String>{

	public List<product> findByProductName(String productName);
	public List<product> findByBrand(String productBrand);
	public product findByProductCode(String productCode);
	
	@Query("from product p where p.id =:id")
	public List<product> findByCode(int id);
	

	@Query("from product p where p.productCode like %:data% or p.productName like %:data% or p.brand like %:data%")
	public List<product> search(String data);
	
	@Query("from product p where p.brand=:brand and p.price between :lowPrice and :highPrice")
	public List<product> filter(int lowPrice,int highPrice,String brand);
	
	@Query("from product p where p.price between :lowPrice and :highPrice")
	public List<product> filter(int lowPrice,int highPrice);
	
	
	
}
