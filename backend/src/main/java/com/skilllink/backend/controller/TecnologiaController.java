package com.skilllink.backend.controller;

import com.skilllink.backend.entity.Tecnologia;
import com.skilllink.backend.service.TecnologiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tecnologias")
public class TecnologiaController {

    @Autowired
    private TecnologiaService service;

    @GetMapping
    public List<Tecnologia> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tecnologia> getById(@PathVariable Long id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Tecnologia create(@RequestBody Tecnologia tecnologia) {
        return service.create(tecnologia);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tecnologia> update(@PathVariable Long id, @RequestBody Tecnologia tecnologia) {
        Tecnologia updated = service.update(id, tecnologia);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
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
