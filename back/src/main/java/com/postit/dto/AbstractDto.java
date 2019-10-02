package com.postit.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@NoArgsConstructor
@SuperBuilder(toBuilder = true)
public class AbstractDto implements Serializable {

    private static final long serialVersionUID = 1L;

    @Getter
    @Setter
    private Long id;
}

