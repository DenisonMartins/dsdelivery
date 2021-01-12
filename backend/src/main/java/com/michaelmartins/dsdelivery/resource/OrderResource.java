package com.michaelmartins.dsdelivery.resource;

import com.michaelmartins.dsdelivery.dto.OrderDTO;
import com.michaelmartins.dsdelivery.exception.OrderWithoutProductsException;
import com.michaelmartins.dsdelivery.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import static org.springframework.util.CollectionUtils.isEmpty;

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
        checkOrderHasProducts(dto);
        OrderDTO orderSave = orderService.create(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
                .buildAndExpand(orderSave.getId()).toUri();
        return ResponseEntity.created(uri).body(orderSave);
    }

    private void checkOrderHasProducts(OrderDTO dto) {
        if (isEmpty(dto.getProducts())) {
            throw new OrderWithoutProductsException("Pedido sem produtos, favor selecionar um produto.");
        }
    }

    @PutMapping("/{id}/delivered")
    public ResponseEntity<OrderDTO> delivered(@PathVariable Long id) {
        return ResponseEntity.ok().body(orderService.delivered(id));
    }
}
