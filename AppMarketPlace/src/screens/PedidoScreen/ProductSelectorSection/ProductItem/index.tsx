import React from 'react';

import HeartIcon from '../../../../assets/image/heart-icon.svg';
import AddIcon from '../../../../assets/image/add-icon.svg';

import {
    Container,
    ContainerHeartIcon,
    ContainerImage,
    ProductName,
    ProductWeight,
    ContainerButtonAdd,
    ButtonAdd,
    ContainerProductName,
    ProductImage,
} from './styles';

export interface ProductItemProps {
    id: string;
    name: string;
    weight: number;
    imageUrl: any;
}

interface Props {
    item: ProductItemProps;
}

export function ProductItem({item}: Props) {
    return (
        <Container>
            <ContainerImage>
                <ContainerHeartIcon>
                    <HeartIcon />
                </ContainerHeartIcon>
                <ProductImage source={item.imageUrl} />
            </ContainerImage>
            <ContainerProductName>
                <ProductName>{item.name}</ProductName>
                <ProductWeight>
                    {'Peso'}{' '}
                    {Intl.NumberFormat('pt-BR', {
                        minimumFractionDigits: 3,
                    }).format(item.weight)}{' '}
                    {'Kg'}
                </ProductWeight>
            </ContainerProductName>
            <ContainerButtonAdd>
                <ButtonAdd>
                    <AddIcon />
                </ButtonAdd>
            </ContainerButtonAdd>
        </Container>
    );
}
