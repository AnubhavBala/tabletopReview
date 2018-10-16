package com.drink.up.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.drink.up.model.Review;

@Repository
public interface BoardGameRepository extends JpaRepository<Review,Integer> {

}
