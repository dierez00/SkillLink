package com.skilllink.backend.controller;

import com.skilllink.backend.entity.ProyectoTecnologia;
import com.skilllink.backend.service.ProyectoTecnologiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/proyecto-tecnologias")
public class ProyectoTecnologiaController {

    @Autowired
    private ProyectoTecnologiaService service;

    @GetMapping
    public List<ProyectoTecnologia> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProyectoTecnologia> getById(@PathVariable Long id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ProyectoTecnologia create(@RequestBody ProyectoTecnologia relacion) {
        return service.create(relacion);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (service.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
