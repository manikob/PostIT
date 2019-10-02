package com.postit.controller;

import com.postit.dto.PostItDto;
import com.postit.services.PostItService;
import javax.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@Slf4j
public class PostItController {

    private final PostItService service;

    PostItController(PostItService service) {
        this.service = service;
    }

    @PostMapping
    public PostItDto create() {
        log.info("Start creating note");

        PostItDto result = this.service.create();
        log.info("Note created: {}", result.getId());
        return result;
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Long id, HttpServletResponse response) {
        log.info("Deleting note: {}", id);
        PostItDto dto = this.service.get(id);

        if (dto != null) {
            this.service.delete(dto);
            log.info("Note {} deleted", dto.getId());
        } else {
            response.setStatus(HttpServletResponse.SC_NO_CONTENT);
            log.warn("Note: {} not found", id);
        }
    }

    @PutMapping
    public PostItDto update(@RequestBody PostItDto note, HttpServletResponse response) {
        log.info("Start updating note: {}", note != null ? note.getId() : null);

        PostItDto result = null;
        if (note != null && note.getId() != null) {
            result = this.service.update(note);
        }
        if (result == null) {
            response.setStatus(HttpServletResponse.SC_NO_CONTENT);
            log.warn("Note: {} not found", note != null ? note.getId() : null);
        } else {
            log.info("Note {} updated", result.getId());
        }
        return result;
    }

    @GetMapping("{id}")
    public PostItDto get(@PathVariable("id") Long id, HttpServletResponse response) {
        log.info("Getting note: {}", id);

        PostItDto dto = this.service.get(id);
        if (dto == null) {
            response.setStatus(HttpServletResponse.SC_NO_CONTENT);
            log.warn("Note: {} not found", id);
        }
        return dto;
    }

    @GetMapping
    public Page<PostItDto> all(Pageable p) {
        log.info("Get all notes");
        return this.service.all(p);
    }

}
