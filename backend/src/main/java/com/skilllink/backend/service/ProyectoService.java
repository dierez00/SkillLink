package com.skilllink.backend.service;

import com.skilllink.backend.dto.ProyectoConTecnologiasDTO;
import com.skilllink.backend.entity.Desafio;
import com.skilllink.backend.entity.Proyecto;
import com.skilllink.backend.entity.ProyectoTecnologia;
import com.skilllink.backend.entity.Tecnologia;
import com.skilllink.backend.repository.ProyectoRepository;
import com.skilllink.backend.repository.ProyectoTecnologiaRepository;
import com.skilllink.backend.repository.TecnologiaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProyectoService {

    @Autowired
    private ProyectoRepository repository;

    public List<Proyecto> getAll() {
        return repository.findAll();
    }

    public Optional<Proyecto> getById(Long id) {
        return repository.findById(id);
    }

    public Proyecto create(Proyecto proyecto) {
        return repository.save(proyecto);
    }

    public Proyecto update(Long id, Proyecto nuevoProyecto) {
        return repository.findById(id).map(existing -> {
            existing.setTitulo(nuevoProyecto.getTitulo());
            existing.setDescripcion(nuevoProyecto.getDescripcion());
            existing.setEstado(nuevoProyecto.getEstado());
            existing.setFecha_inicio(nuevoProyecto.getFecha_inicio());
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
    @Autowired
    private ProyectoTecnologiaRepository proyectoTecnologiaRepository;

    @Autowired
    private TecnologiaRepository tecnologiaRepository;

    public ProyectoConTecnologiasDTO getProyectoConTecnologias(Long id) {
        Proyecto proyecto = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Proyecto no encontrado"));

        List<Long> tecnologiaIds = proyectoTecnologiaRepository.findAllByProjectId(id).stream()
                .map(ProyectoTecnologia::getId_tecnologia)
                .toList();
        List<Tecnologia> tecnologias = tecnologiaRepository.findAllById(tecnologiaIds);

        return new ProyectoConTecnologiasDTO(
                proyecto.getId_proyecto(),
                proyecto.getTitulo(),
                proyecto.getDescripcion(),
                proyecto.getEstado(),
                proyecto.getFecha_inicio(),
                tecnologias
        );

    }

    public List<Proyecto> findProyectosByHabilidad(String habilidad) {
        return repository.findByHabilidadInDescripcion(habilidad);
    }

}
