package com.skilllink.backend.repository;

import com.skilllink.backend.entity.ProyectoTecnologia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProyectoTecnologiaRepository extends JpaRepository<ProyectoTecnologia, Long> {

    @Query("SELECT relation FROM ProyectoTecnologia relation WHERE relation.id_proyecto = :projectId")
    List<ProyectoTecnologia> findAllByProjectId(@Param("projectId") Long projectId);
}
