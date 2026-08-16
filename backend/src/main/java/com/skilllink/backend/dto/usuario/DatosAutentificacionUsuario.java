package com.skilllink.backend.dto.usuario;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record DatosAutentificacionUsuario (
        @NotBlank @Email String email,
        @NotBlank String contrasena) {
}
