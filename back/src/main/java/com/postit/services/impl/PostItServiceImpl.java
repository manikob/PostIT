package com.postit.services.impl;

import com.postit.dto.PostItDto;
import com.postit.mapper.PostItMapper;
import com.postit.model.PostItEntity;
import com.postit.repository.PostITRepo;
import com.postit.services.PostItService;
import java.util.Optional;
import javax.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Transactional
@Slf4j
public class PostItServiceImpl implements PostItService {

    private final PostItMapper mapper;
    private final PostITRepo repository;

    public PostItServiceImpl(PostItMapper mapper, PostITRepo repository) {
        this.mapper = mapper;
        this.repository = repository;
    }

    @Override
    public PostItDto create() {
        PostItEntity entity = new PostItEntity();
        entity = this.repository.save(entity);

        return this.mapper.mapToDto(entity);
    }

    @Override
    public PostItDto update(PostItDto dto) {
        if (dto != null && dto.getId() != null) {
            Optional<PostItEntity> optionalEntity = this.repository.findById(dto.getId());
            if (optionalEntity.isPresent()) {
                PostItEntity e = optionalEntity.get();
                this.mapper.mapToEntity(e, dto);
                this.repository.save(e);
                return this.mapper.mapToDto(e);
            }
        }

        return null;
    }

    @Override
    public boolean delete(PostItDto dto) {
        if (dto != null && dto.getId() != null) {
            Optional<PostItEntity> optionalEntity = this.repository.findById(dto.getId());
            if (optionalEntity.isPresent()) {
                this.repository.delete(optionalEntity.get());
                return true;
            }
        }

        return false;
    }

    @Override
    public PostItDto get(Long id) {
        if (id != null) {
            Optional<PostItEntity> optionalEntity = this.repository.findById(id);
            if (optionalEntity.isPresent()) {
                return this.mapper.mapToDto(optionalEntity.get());
            }
        }
        return null;
    }

    @Override
    public Page<PostItDto> all(Pageable p) {
        return this.repository
                .findAll(p)
                .map(this.mapper::mapToDto);
    }

}
