package com.drink.up.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.drink.up.exceptions.ResourceNotFoundException;
import com.drink.up.model.DnD;
import com.drink.up.model.Review;
import com.drink.up.repository.BoardGameRepository;
import com.drink.up.repository.DnDRepository;
//@CrossOrigin(origins = "*",maxAge=3600)
@org.springframework.web.bind.annotation.RestController
@RequestMapping({"/api/dnd"})
public class DnDController {
	@Autowired
	private DnDRepository dndrepo;
 public String greet() {
  return "Hello from the other side!!!";
 }
 @GetMapping(value="/stry")
 public DnD getBoardGame() {
	 
	 return dndrepo.findById(1).orElseThrow(()-> new ResourceNotFoundException("DND","id",1));
 }
}