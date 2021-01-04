package com.michaelmartins.dsdelivery.services;

import com.michaelmartins.dsdelivery.dto.ProductDTO;
import com.michaelmartins.dsdelivery.repositories.ProductRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Transactional(readOnly = true)
    public List<ProductDTO> findAll() {
        return productRepository.findAllByOrderByNameAsc().stream()
                .map(ProductDTO::new)
                .collect(Collectors.toList());
    }
}
