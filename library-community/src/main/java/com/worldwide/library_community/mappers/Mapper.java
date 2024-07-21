package com.worldwide.library_community.mappers;

public interface Mapper<A, B> {
    B mapEntityToDto(A a);
    A mapDtoToEntity(B b);
}
