package com.skilllink.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Builder
@Getter
@Setter
@Table (name = "Perfil")
@Entity (name = "Perfil")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode (of = "idPerfil")
public class Perfil {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id_perfil")
    private Long idPerfil;
    private String descripcion;
    private String experiencia;
    private String ubicacion;
    @Column (name = "redes_sociales")
    private String redesSociales;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    @OneToMany(mappedBy = "perfil",cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    @Builder.Default
    private List<PerfilHabilidad> perfilHabilidad = new ArrayList<>();

}
