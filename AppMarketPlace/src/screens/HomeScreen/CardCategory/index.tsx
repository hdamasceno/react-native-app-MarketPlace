import React from 'react';
import {FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {CardCategoryItem, CardCategoryProps} from './CardCategoryItem';

import {Container, Title} from './styles';

export function CardCategory() {
    const lista: CardCategoryProps[] = [
        {
            id: '1',
            name: 'Vegetables',
            imageUrl: require('../../../assets/image/category/category1.png'),
        },
        {
            id: '2',
            name: 'Fruits',
            imageUrl: require('../../../assets/image/category/category2.png'),
        },
        {
            id: '3',
            name: 'Meat & Eggs',
            imageUrl: require('../../../assets/image/category/category3.png'),
        },
        {
            id: '4',
            name: 'Drinks',
            imageUrl: require('../../../assets/image/category/category4.png'),
        },
        {
            id: '5',
            name: 'Bakery',
            imageUrl: require('../../../assets/image/category/category5.png'),
        },
    ];

    return (
        <Container>
            <Title>Categorias</Title>
            <FlatList
                data={lista}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    paddingBottom: getBottomSpace(),
                }}
                renderItem={({item}) => <CardCategoryItem item={item} />}
            />
        </Container>
    );
}
