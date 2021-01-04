package com.michaelmartins.dsdelivery.resources;

import com.michaelmartins.dsdelivery.dto.OrderDTO;
import com.michaelmartins.dsdelivery.services.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/orders")
public class OrderResource {

    private final OrderService orderService;

    public OrderResource(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<OrderDTO>> findAll() {
        return ResponseEntity.ok(orderService.findAllOrdersPendings());
    }

    @PostMapping
    public ResponseEntity<OrderDTO> create(@RequestBody OrderDTO dto) {
        OrderDTO orderSave = orderService.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(orderService.create(dto).getId()).toUri();
        return ResponseEntity.created(uri).body(orderSave);
    }

    @PutMapping("/{id}/delivered")
    public ResponseEntity<OrderDTO> delivered(@PathVariable Long id) {
        return ResponseEntity.ok().body(orderService.delivered(id));
    }
}
