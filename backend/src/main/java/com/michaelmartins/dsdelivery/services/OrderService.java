package com.michaelmartins.dsdelivery.services;

import com.michaelmartins.dsdelivery.domain.Order;
import com.michaelmartins.dsdelivery.dto.OrderDTO;
import com.michaelmartins.dsdelivery.repositories.OrderRepository;
import com.michaelmartins.dsdelivery.repositories.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import static com.michaelmartins.dsdelivery.domain.OrderStatus.DELIVERED;
import static com.michaelmartins.dsdelivery.domain.OrderStatus.PENDING;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;

    public OrderService(OrderRepository orderRepository,
                        ProductRepository productRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
    }

    @Transactional(readOnly = true)
    public List<OrderDTO> findAllOrdersPendings() {
        return orderRepository.findOrdersWithProducts(PENDING).stream()
                .map(OrderDTO::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO create(OrderDTO dto) {
        Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), PENDING);
        dto.getProducts().stream()
                .map(productDTO -> productRepository.getOne(productDTO.getId()))
                .forEach(product -> order.getProducts().add(product));

        return new OrderDTO(orderRepository.save(order));
    }

    @Transactional
    public OrderDTO delivered(Long id) {
        Order order = orderRepository.getOne(id);
        order.setStatus(DELIVERED);
        return new OrderDTO(orderRepository.save(order));
    }

}
