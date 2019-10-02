package com.postit.services;

import com.postit.dto.PostItDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PostItService {

    PostItDto create();

    PostItDto update(PostItDto dto);

    boolean delete(PostItDto dto);
    
    PostItDto get(Long id);

    Page<PostItDto> all(Pageable p);
}
