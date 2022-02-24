import React from 'react';
import {FlatList} from 'react-native';
import {CategoryItem, CategoryItemProps} from './CategoryItem';

import {Container} from './styles';

export function CategorySection() {
    const lista: CategoryItemProps[] = [
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
            <FlatList
                data={lista}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => <CategoryItem item={item} />}
            />
        </Container>
    );
}
