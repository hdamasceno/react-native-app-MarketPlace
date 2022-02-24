import React from 'react';

import BackIcon from '../../../assets/image/productSelect/back-icon.svg';
import HeartIcon from '../../../assets/image/productSelect/heart-icon.svg';

import {
    Container,
    ProductImage,
    ContainerProductInfo,
    ContainerProductDetail,
    ProductCategory,
    ProductName,
    ProductPrice,
    ContainerBackButton,
    BackButton,
    ContainerHeartButton,
    HeartButton,
    ContainerProductCategory,
} from './styles';

export function HeaderSection() {
    return (
        <Container>
            <ContainerBackButton>
                <BackButton>
                    <BackIcon />
                </BackButton>
            </ContainerBackButton>
            <ContainerHeartButton>
                <HeartButton>
                    <HeartIcon />
                </HeartButton>
            </ContainerHeartButton>
            <ProductImage
                source={require('../../../assets/image/productSelect/product-1.png')}
            />
            <ContainerProductInfo>
                <ContainerProductDetail>
                    <ContainerProductCategory>
                        <ProductCategory>Vegetais</ProductCategory>
                    </ContainerProductCategory>
                    <ProductName>Cenoura Itália</ProductName>
                    <ProductPrice>R$ 12,99</ProductPrice>
                </ContainerProductDetail>
            </ContainerProductInfo>
        </Container>
    );
}
