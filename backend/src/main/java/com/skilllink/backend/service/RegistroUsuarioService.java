package com.skilllink.backend.service;

import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.dto.usuario.UsuarioInfRegistro;
import com.skilllink.backend.mapper.UsuarioMapper;
import com.skilllink.backend.repository.UsuarioRepository;
import com.skilllink.backend.messaging.EmailEventPublisher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RegistroUsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private UsuarioMapper usuarioMapper;

    @Autowired
    private EmailEventPublisher emailEventPublisher;

    public Usuario registro(UsuarioInfRegistro usuarioInfRegistro){

        if (usuarioRepository.existsByEmail(usuarioInfRegistro.email())) {
            throw new IllegalArgumentException("Email is already registered");
        }

        Usuario usuario = usuarioRepository.save(usuarioMapper.toEntity(usuarioInfRegistro));
        emailEventPublisher.sendUserRegistrationEvent(usuario.getNombre(), usuario.getEmail());
        return usuario;
    }


}
