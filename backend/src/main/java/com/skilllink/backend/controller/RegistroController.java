package com.skilllink.backend.controller;

import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.dto.usuario.UsuarioInfRegistro;
import com.skilllink.backend.dto.usuario.UsuarioInfoSalida;
import com.skilllink.backend.service.RegistroUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/api/registro")
public class RegistroController {

    @Autowired
    private RegistroUsuarioService registroUsuarioService;

    @PostMapping
    public ResponseEntity<UsuarioInfoSalida> registro (@RequestBody @Valid UsuarioInfRegistro usuarioInfRegistro, UriComponentsBuilder uriComponentsBuilder){


        //Guarda la información del request en la base de datos usando
        Usuario usuario = registroUsuarioService.registro(usuarioInfRegistro);

        //Obtiene la información del request para regresar solo los datos relevantes
        UsuarioInfoSalida  usuarioInfoSalida = new UsuarioInfoSalida(usuario.getIdUsuario(), usuarioInfRegistro.nombre(), usuarioInfRegistro.email(), usuario.getFechaRegistro());

        URI url = uriComponentsBuilder.path("/api/usuario/{idUsuario}").buildAndExpand(usuario.getIdUsuario()).toUri();
        return ResponseEntity.created(url).body(usuarioInfoSalida);


    }

}
