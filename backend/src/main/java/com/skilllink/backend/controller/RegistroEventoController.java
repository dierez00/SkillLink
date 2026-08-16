package com.skilllink.backend.controller;

import com.skilllink.backend.dto.registroEvento.DatosEntradaRegistroEvento;
import com.skilllink.backend.dto.registroEvento.DatosSalidaRegistroEvento;
import com.skilllink.backend.entity.Evento;
import com.skilllink.backend.entity.RegistroEvento;
import com.skilllink.backend.entity.Usuario;
import com.skilllink.backend.repository.EventoRepository;
import com.skilllink.backend.repository.RegistroEventoRepository;
import com.skilllink.backend.repository.UsuarioRepository;
import com.skilllink.backend.service.RegistroEventoService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/registro-evento")
public class RegistroEventoController {

    @Autowired
    private RegistroEventoRepository registroEventoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private EventoRepository eventoRepository;

    @Autowired
    private RegistroEventoService service;

    @PostMapping
    public ResponseEntity<DatosSalidaRegistroEvento> registrarRegistroEvento(@RequestBody @Valid DatosEntradaRegistroEvento datosRegistroEvento, UriComponentsBuilder uriComponentsBuilder) {
        if (usuarioRepository.existsById(datosRegistroEvento.idUsuario()) && eventoRepository.existsById(datosRegistroEvento.idEvento())) {
            Usuario usuario = usuarioRepository.getReferenceById(datosRegistroEvento.idUsuario());
            Evento evento = eventoRepository.getReferenceById(datosRegistroEvento.idEvento());
            RegistroEvento registroEvento = registroEventoRepository.save(new RegistroEvento(datosRegistroEvento, usuario, evento));
            DatosSalidaRegistroEvento datosSalidaRegistroEvento = new DatosSalidaRegistroEvento(registroEvento);
            URI url = uriComponentsBuilder.path("registro/{id}").buildAndExpand(registroEvento.getIdRegistro()).toUri();
            return ResponseEntity.created(url).body(datosSalidaRegistroEvento);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping
    public ResponseEntity<Page<DatosSalidaRegistroEvento>> listadoRegistroEventos(Pageable paginacion) {
        return ResponseEntity.ok(registroEventoRepository.findAll(paginacion).map(DatosSalidaRegistroEvento::new));
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosSalidaRegistroEvento> retornarDatosRegistroEvento(@PathVariable Long id) {
        if (registroEventoRepository.existsById(id)) {
            RegistroEvento registroEvento = registroEventoRepository.getReferenceById(id);
            var datosRegistroEvento = new DatosSalidaRegistroEvento(registroEvento);
            return ResponseEntity.ok(datosRegistroEvento);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<DatosSalidaRegistroEvento> actualizarRegistroEvento(@PathVariable Long id, @RequestBody @Valid DatosEntradaRegistroEvento datosEntradaRegistroEvento) {
        if (registroEventoRepository.existsById(id) && usuarioRepository.existsById(datosEntradaRegistroEvento.idUsuario()) && eventoRepository.existsById(datosEntradaRegistroEvento.idEvento())) {
            RegistroEvento registroEventoActualizado = service.actualizar(id, datosEntradaRegistroEvento);
            return ResponseEntity.ok(new DatosSalidaRegistroEvento(registroEventoActualizado));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> eliminarRegistroEvento(@PathVariable Long id) {
        if (registroEventoRepository.existsById(id)) {
            registroEventoRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
