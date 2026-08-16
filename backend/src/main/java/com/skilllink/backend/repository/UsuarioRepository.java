package com.skilllink.backend.repository;

import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.dto.usuario.MatchSocialPorcentuado;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmail(String email);

    boolean existsByEmail(String email);

    @Query(
            value = "WITH HabilidadesUsuarioBase AS ( " +
                    "SELECT ph.id_habilidad FROM Perfil_Habilidad ph " +
                    "JOIN Perfil p ON ph.id_perfil = p.id_perfil WHERE p.id_usuario = :idUsuario), " +
                    "ConteoIntereses AS (SELECT u.id_usuario, u.nombre, COUNT(ph.id_habilidad) AS intereses_comunes " +
                    "FROM Usuario u JOIN Perfil p ON u.id_usuario = p.id_usuario " +
                    "JOIN Perfil_Habilidad ph ON p.id_perfil = ph.id_perfil " +
                    "WHERE ph.id_habilidad IN (SELECT id_habilidad FROM HabilidadesUsuarioBase) " +
                    "AND u.id_usuario != :idUsuario GROUP BY u.id_usuario, u.nombre) " +
                    "SELECT ci.id_usuario AS idUsuario, ci.nombre AS nombre, " +
                    "ci.intereses_comunes AS habilidadesComunes, " +
                    "(SELECT COUNT(*) FROM HabilidadesUsuarioBase) AS numeroBase, " +
                    "CASE WHEN (SELECT COUNT(*) FROM HabilidadesUsuarioBase) > 0 THEN " +
                    "ROUND(ci.intereses_comunes / (SELECT COUNT(*) FROM HabilidadesUsuarioBase) * 100) " +
                    "ELSE 0 END AS porcentaje FROM ConteoIntereses ci ORDER BY porcentaje DESC",
            countQuery = "SELECT COUNT(DISTINCT u.id_usuario) FROM Usuario u " +
                    "JOIN Perfil p ON u.id_usuario = p.id_usuario " +
                    "JOIN Perfil_Habilidad ph ON p.id_perfil = ph.id_perfil " +
                    "WHERE ph.id_habilidad IN (SELECT ph_sub.id_habilidad FROM Perfil_Habilidad ph_sub " +
                    "JOIN Perfil p_sub ON ph_sub.id_perfil = p_sub.id_perfil " +
                    "WHERE p_sub.id_usuario = :idUsuario) AND u.id_usuario != :idUsuario",
            nativeQuery = true
    )
    Page<MatchSocialPorcentuado> findMatchBySkill(@Param("idUsuario") Long idUsuario, Pageable pageable);
}
