import React from 'react';
import {Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
    Container,
    ContainerImage,
    Title,
    Price,
    ContainerProductInfo,
} from './styles';

export interface ProductRelatedProps {
    id: string;
    name: string;
    imageUrl: any;
}

interface Props {
    item: ProductRelatedProps;
}

export function ProductRelatedItem({item}: Props) {
    return (
        <Container>
            <ContainerImage>
                <Image
                    width={RFValue(84)}
                    height={RFValue(63)}
                    source={item.imageUrl}
                />
            </ContainerImage>
            <ContainerProductInfo>
                <Title>{item.name}</Title>
                <Price>R$ 1,99</Price>
            </ContainerProductInfo>
        </Container>
    );
}
