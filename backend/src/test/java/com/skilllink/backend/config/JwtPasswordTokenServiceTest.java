package com.skilllink.backend.config;

import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.security.TokenService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

class JwtPasswordTokenServiceTest {

    private static final String SHARED_TEST_SECRET = "test-secret-with-at-least-32-characters";
    private JwtPasswordTokenService resetTokenService;

    @BeforeEach
    void setUp() {
        resetTokenService = new JwtPasswordTokenService();
        ReflectionTestUtils.setField(resetTokenService, "secret", SHARED_TEST_SECRET);
    }

    @Test
    void validatesTokenCreatedForPasswordReset() {
        String token = resetTokenService.generateToken("learner@example.com");
        assertThat(resetTokenService.validateToken(token)).isEqualTo("learner@example.com");
    }

    @Test
    void rejectsAuthenticationTokenEvenWhenItUsesTheSameSecret() {
        TokenService authenticationTokens = new TokenService();
        ReflectionTestUtils.setField(authenticationTokens, "apiSecret", SHARED_TEST_SECRET);
        ReflectionTestUtils.setField(authenticationTokens, "expirationMinutes", 180L);
        Usuario usuario = new Usuario();
        usuario.setIdUsuario(1L);
        usuario.setEmail("learner@example.com");

        String authenticationToken = authenticationTokens.generarToken(usuario);

        assertThatThrownBy(() -> resetTokenService.validateToken(authenticationToken))
                .isInstanceOf(RuntimeException.class);
    }
}
