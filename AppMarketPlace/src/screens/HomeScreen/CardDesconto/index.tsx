import React from 'react';
import {FlatList} from 'react-native';
import {CardDescontoItem, DescontoItemProps} from './CardDescontoItem';

import {Container} from './styles';

interface CardDescontoProps {}

export function CardDesconto({}: CardDescontoProps) {
    const lista: DescontoItemProps[] = [
        {
            id: '1',
            imageUrl: '../../../assets/image/cardPromotion-1.png',
        },
        {
            id: '2',
            imageUrl: '../../../assets/image/cardPromotion-1.png',
        },
    ];

    return (
        <Container>
            <FlatList
                data={lista}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CardDescontoItem item={item} />}
            />
        </Container>
    );
}
