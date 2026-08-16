package com.skilllink.backend.config;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;

@Service
public class JwtPasswordTokenService {

    private static final String ISSUER = "SkillLink-password-reset";
    private static final String PURPOSE = "password-reset";

    @Value("${api.security.password-reset-secret}")
    private String secret;

    // Generar token con expiración de 15 minutos
    public String generateToken(String email) {
        Instant now = Instant.now();
        Instant exp = now.plusSeconds(15 * 60); // 15 minutos

        return JWT.create()
                .withIssuer(ISSUER)
                .withSubject(email)
                .withClaim("purpose", PURPOSE)
                .withIssuedAt(Date.from(now))
                .withExpiresAt(Date.from(exp))
                .sign(Algorithm.HMAC256(secret));
    }

    // Validar token y extraer email
    public String validateToken(String token) {
        try {
            Algorithm algorithm = Algorithm.HMAC256(secret);
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer(ISSUER)
                    .withClaim("purpose", PURPOSE)
                    .build();
            DecodedJWT jwt = verifier.verify(token);
            return jwt.getSubject(); // email
        } catch (Exception e) {
            throw new RuntimeException("Token inválido o expirado");
        }
    }
}
