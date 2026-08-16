package com.skilllink.backend.controller;

import com.skilllink.backend.dto.usuario.MatchSocialPorcentuado;
import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("api/recomendacion-social")
public class RecomendacionesController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping
    public ResponseEntity<Page<MatchSocialPorcentuado>> matchingPorHabilidades(@AuthenticationPrincipal Usuario usuario, @PageableDefault Pageable paginacion) {

        Page<MatchSocialPorcentuado> skillMatchUser = usuarioRepository.findMatchBySkill(usuario.getIdUsuario(), paginacion);

        return ResponseEntity.ok(skillMatchUser);
    }

}
