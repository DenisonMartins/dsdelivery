package com.michaelmartins.dsdelivery.repositories;

import com.michaelmartins.dsdelivery.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
