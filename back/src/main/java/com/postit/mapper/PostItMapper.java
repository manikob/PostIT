package com.postit.mapper;

import com.postit.dto.PostItDto;
import com.postit.model.PostItEntity;
import org.springframework.stereotype.Component;

@Component
public class PostItMapper {

    public PostItDto mapToDto(PostItEntity entity) {
        return PostItDto.builder()
                .content(entity.getContent())
                .id(entity.getId())
                .build();
    }

    public void mapToEntity(PostItEntity entity, PostItDto dto) {
        entity.setContent(dto.getContent());
        entity.setId(dto.getId());
    }
}
