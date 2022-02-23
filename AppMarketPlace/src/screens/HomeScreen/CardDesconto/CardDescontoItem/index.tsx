import React from 'react';
import {Image} from 'react-native';

import {Container} from './styles';

export interface DescontoItemProps {
    id: string;
    imageUrl: any;
}

interface CardDescontoItem {
    item: DescontoItemProps;
}

export function CardDescontoItem({}: CardDescontoItem) {
    return (
        <Container>
            <Image
                source={require('../../../../assets/image/cardPromotion-1.png')}
            />
        </Container>
    );
}
