package com.postit.repository;

import com.postit.model.PostItEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostITRepo extends JpaRepository<PostItEntity, Long>{    
}
