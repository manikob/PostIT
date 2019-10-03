package com.postit.testmodel;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import groovy.transform.builder.Builder;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class PageHelper<T>  {
    private List<T> content;
    protected int number;
    protected int size;
    protected int totalPages;
    protected int numberOfElements;
    protected long totalElements;
}
