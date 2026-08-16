package com.skilllink.backend.mapper;

import com.skilllink.backend.dto.usuario.UsuarioInfRegistro;
import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.enums.RolUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class UsuarioMapper {

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Usuario toEntity(UsuarioInfRegistro dto) {
        // Encriptar la contraseña
        String contrasenaEncriptada = passwordEncoder.encode(dto.contrasena());

        // Crear objeto Usuario
        Usuario nuevoUsuario = new Usuario();
        nuevoUsuario.setEmail(dto.email());
        nuevoUsuario.setNombre(dto.nombre());
        nuevoUsuario.setNickname(dto.nickname());
        nuevoUsuario.setRol(RolUsuario.valueOf(dto.rol()));
        nuevoUsuario.setContrasena(contrasenaEncriptada);
        nuevoUsuario.setFechaRegistro(LocalDateTime.now());

        return nuevoUsuario;
    }
}
