package com.postit.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "PT_POSTIT")
public class PostItEntity extends AbstractEntity {

    @Column(length = 200)
    @Getter
    @Setter
    private String content;
}
