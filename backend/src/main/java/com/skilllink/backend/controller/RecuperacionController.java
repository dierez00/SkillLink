package com.skilllink.backend.controller;

import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.repository.UsuarioRepository;
import com.skilllink.backend.config.JwtPasswordTokenService;
import com.skilllink.backend.messaging.PasswordResetPublisher;
import com.skilllink.backend.dto.PasswordRecoveryRequest;
import com.skilllink.backend.dto.PasswordResetRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recuperar")
public class RecuperacionController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private JwtPasswordTokenService tokenService;

    @Autowired
    private PasswordResetPublisher passwordResetPublisher;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping
    public ResponseEntity<String> enviarToken(@RequestBody @Valid PasswordRecoveryRequest request) {
        usuarioRepository.findByEmail(request.email()).ifPresent(usuario -> {
            String token = tokenService.generateToken(request.email());
            passwordResetPublisher.sendResetLink(request.email(), token);
        });
        return ResponseEntity.ok("If the account exists, a recovery email will be sent");
    }

    @PostMapping("/reset")
    public ResponseEntity<String> restablecer(@RequestBody @Valid PasswordResetRequest request) {
        try {
            String email = tokenService.validateToken(request.token());
            Usuario usuario = usuarioRepository.findByEmail(email).orElseThrow();
            usuario.setContrasena(passwordEncoder.encode(request.nueva()));
            usuarioRepository.save(usuario);
            return ResponseEntity.ok("Password updated");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid or expired token");
        }
    }
}
