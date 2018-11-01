package com.drink.up.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.drink.up.exceptions.ResourceNotFoundException;
import com.drink.up.model.Review;
import com.drink.up.repository.BoardGameRepository;
//@CrossOrigin(origins = "*",maxAge=3600)
@org.springframework.web.bind.annotation.RestController
@RequestMapping({"/api"})
public class RestController {
	@Autowired
	private BoardGameRepository bgrepo;
 public String greet() {
  return "Hello from the other side!!!";
 }
 @GetMapping(value="/rev")
 public Review getBoardGame() {
	 
	 return bgrepo.findById(1).orElseThrow(()-> new ResourceNotFoundException("Review","id",1));
 }
}