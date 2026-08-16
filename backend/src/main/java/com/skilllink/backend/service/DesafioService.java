package com.skilllink.backend.service;

import com.skilllink.backend.entity.Desafio;
import com.skilllink.backend.repository.DesafioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DesafioService {

    @Autowired
    private DesafioRepository repository;

    public List<Desafio> getAll() {
        return repository.findAll();
    }

    public Optional<Desafio> getById(Long id) {
        return repository.findById(id);
    }

    public Desafio create(Desafio desafio) {
        return repository.save(desafio);
    }

    public Desafio update(Long id, Desafio nuevoDesafio) {
        return repository.findById(id).map(existing -> {
            existing.setTitulo(nuevoDesafio.getTitulo());
            existing.setDescripcion(nuevoDesafio.getDescripcion());
            existing.setDificultad(nuevoDesafio.getDificultad());
            existing.setfecha_limite(nuevoDesafio.getfecha_limite());
            existing.setEstado(nuevoDesafio.getEstado());
            return repository.save(existing);
        }).orElse(null);
    }

    public boolean delete(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Desafio> findDesafiosByHabilidad(String habilidad) {
        return repository.findByHabilidadInDescripcion(habilidad);
    }

}
