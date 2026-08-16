package com.skilllink.backend.security;

import com.skilllink.backend.entity.Usuario;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import static org.assertj.core.api.Assertions.assertThat;

class TokenServiceTest {

    private TokenService tokenService;

    @BeforeEach
    void setUp() {
        tokenService = new TokenService();
        ReflectionTestUtils.setField(tokenService, "apiSecret", "test-secret-with-at-least-32-characters");
        ReflectionTestUtils.setField(tokenService, "expirationMinutes", 180L);
    }

    @Test
    void generatesAndValidatesAuthenticationToken() {
        Usuario usuario = new Usuario();
        usuario.setIdUsuario(42L);
        usuario.setEmail("learner@example.com");

        String token = tokenService.generarToken(usuario);

        assertThat(tokenService.getSubject(token)).isEqualTo("learner@example.com");
    }

    @Test
    void rejectsInvalidTokenWithoutBreakingTheFilterChain() {
        assertThat(tokenService.getSubject("not-a-jwt")).isNull();
    }
}
