package com.skilllink.backend.service;

import com.skilllink.backend.dto.usuario.UsuarioInfRegistro;
import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.mapper.UsuarioMapper;
import com.skilllink.backend.messaging.EmailEventPublisher;
import com.skilllink.backend.repository.UsuarioRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RegistroUsuarioServiceTest {

    @Mock UsuarioRepository usuarioRepository;
    @Mock UsuarioMapper usuarioMapper;
    @Mock EmailEventPublisher emailEventPublisher;
    @InjectMocks RegistroUsuarioService service;

    private final UsuarioInfRegistro request = new UsuarioInfRegistro(
            "Ada Lovelace", "ada@example.com", "secure-password", "APRENDIZ", "ada");

    @Test
    void savesUserAndPublishesWelcomeEvent() {
        Usuario mapped = new Usuario();
        mapped.setNombre(request.nombre());
        mapped.setEmail(request.email());
        when(usuarioMapper.toEntity(request)).thenReturn(mapped);
        when(usuarioRepository.save(mapped)).thenReturn(mapped);

        Usuario result = service.registro(request);

        assertThat(result).isSameAs(mapped);
        verify(emailEventPublisher).sendUserRegistrationEvent("Ada Lovelace", "ada@example.com");
    }

    @Test
    void rejectsDuplicateEmailBeforeSaving() {
        when(usuarioRepository.existsByEmail(request.email())).thenReturn(true);

        assertThatThrownBy(() -> service.registro(request))
                .isInstanceOf(IllegalArgumentException.class);
        verify(usuarioRepository, never()).save(any());
        verifyNoInteractions(emailEventPublisher);
    }
}
