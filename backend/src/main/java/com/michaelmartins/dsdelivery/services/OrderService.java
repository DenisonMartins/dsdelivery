package com.michaelmartins.dsdelivery.services;

import com.michaelmartins.dsdelivery.dto.OrderDTO;
import com.michaelmartins.dsdelivery.repositories.OrderRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

import static com.michaelmartins.dsdelivery.domain.OrderStatus.PENDING;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Transactional(readOnly = true)
    public List<OrderDTO> findAllOrdersPendings() {
        return orderRepository.findOrdersWithProducts(PENDING).stream()
                .map(OrderDTO::new)
                .collect(Collectors.toList());
    }
}
