package com.postit.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;


@SuperBuilder(toBuilder = true)
@NoArgsConstructor
public class PostItDto extends AbstractDto {

    @Getter
    @Setter
    private String content;
}
