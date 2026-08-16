package com.skilllink.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record PasswordResetRequest(
        @NotBlank String token,
        @NotBlank @Size(min = 8, max = 72) String nueva
) {
}
