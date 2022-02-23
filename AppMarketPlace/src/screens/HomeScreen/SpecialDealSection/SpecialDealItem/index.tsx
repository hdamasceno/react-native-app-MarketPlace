import React from 'react';
import {Image} from 'react-native';

import {Container, ContainerImage} from './styles';

export interface SpecialDealProps {
    id: string;
    name: string;
    imageUrl: any;
}

interface SpecialDealItemProps {
    item: SpecialDealProps;
}

export function SpecialDealItem({item}: SpecialDealItemProps) {
    return (
        <Container>
            <ContainerImage>
                <Image source={item.imageUrl} />
            </ContainerImage>
        </Container>
    );
}
