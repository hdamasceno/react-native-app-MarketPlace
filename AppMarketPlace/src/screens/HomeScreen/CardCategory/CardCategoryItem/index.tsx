import React from 'react';
import {Image} from 'react-native';
import {Container, ContainerImage, Title} from './styles';

export interface CardCategoryProps {
    id: string;
    name: string;
    imageUrl: any;
}

interface CardCategoryItemProps {
    item: CardCategoryProps;
}

export function CardCategoryItem({item}: CardCategoryItemProps) {
    return (
        <Container>
            <ContainerImage>
                <Image width={54} height={54} source={item.imageUrl} />
            </ContainerImage>
            <Title>{item.name}</Title>
        </Container>
    );
}
