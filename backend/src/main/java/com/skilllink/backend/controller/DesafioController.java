package com.skilllink.backend.controller;

import com.skilllink.backend.entity.Desafio;
import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.service.DesafioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/desafios")
public class DesafioController {

    @Autowired
    private DesafioService service;

    @GetMapping
    public List<Desafio> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Desafio> getById(@PathVariable Long id) {
        return service.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Desafio create(@RequestBody Desafio desafio, @AuthenticationPrincipal Usuario usuario) {
        desafio.setid_usuario(usuario.getIdUsuario());
        return service.create(desafio);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Desafio> update(@PathVariable Long id, @RequestBody Desafio desafio,
                                          @AuthenticationPrincipal Usuario usuario) {
        if (service.getById(id).filter(existing -> Objects.equals(existing.getid_usuario(), usuario.getIdUsuario())).isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        Desafio updated = service.update(id, desafio);
        if (updated != null) {
            return ResponseEntity.ok(updated);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id, @AuthenticationPrincipal Usuario usuario) {
        if (service.getById(id).filter(existing -> Objects.equals(existing.getid_usuario(), usuario.getIdUsuario())).isEmpty()) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        if (service.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Desafio>> getDesafiosByHabilidad(@RequestParam String habilidad) {
        List<Desafio> resultados = service.findDesafiosByHabilidad(habilidad);
        return ResponseEntity.ok(resultados);
    }

}
