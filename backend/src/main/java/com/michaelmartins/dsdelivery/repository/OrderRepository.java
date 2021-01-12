package com.michaelmartins.dsdelivery.repository;

import com.michaelmartins.dsdelivery.domain.Order;
import com.michaelmartins.dsdelivery.domain.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("select distinct o from Order o join fetch o.products where " +
            "o.status = :status order by o.moment ASC")
    List<Order> findOrdersWithProducts(@Param("status") OrderStatus status);

}
