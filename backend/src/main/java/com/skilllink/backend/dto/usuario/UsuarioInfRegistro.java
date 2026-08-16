package com.skilllink.backend.dto.usuario;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record UsuarioInfRegistro(

        @NotBlank(message = "Ingresa tu nombre completo")
        String nombre,

        @NotBlank(message = "Ingresa tu correo electronico")
        @Email(message = "Ingresa un correo electronico valido")
        String email,

        @NotBlank(message = "Ingresa una contraseña")
        @Size(min = 8, max = 72, message = "La contraseña debe contener entre 8 y 72 caracteres")
        String contrasena,

        @NotBlank(message = "Selecciona tu rol")
        String rol,

        @NotBlank
        @Size(max = 50)
        String nickname
        ) {

}
