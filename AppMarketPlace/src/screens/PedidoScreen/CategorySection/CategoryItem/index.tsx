import React from 'react';
import {Image} from 'react-native';
import {Container, ContainerImage, Title} from './styles';

export interface CategoryItemProps {
    id: string;
    name: string;
    imageUrl: any;
}

interface Props {
    item: CategoryItemProps;
}

export function CategoryItem({item}: Props) {
    return (
        <Container>
            <ContainerImage>
                <Image width={54} height={54} source={item.imageUrl} />
            </ContainerImage>
            <Title>{item.name}</Title>
        </Container>
    );
}
