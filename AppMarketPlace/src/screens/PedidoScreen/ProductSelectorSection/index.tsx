import React from 'react';
import {FlatList} from 'react-native';
import {ProductItem, ProductItemProps} from './ProductItem';

import {Container} from './styles';

export function ProductSelectorSection() {
    const lista: ProductItemProps[] = [
        {
            id: '1',
            name: 'Vegetables',
            weight: 1,
            imageUrl: require('../../../assets/image/productSelector/product-1.png'),
        },
        {
            id: '2',
            name: 'Fruits',
            weight: 2,
            imageUrl: require('../../../assets/image/productSelector/product-2.png'),
        },
        {
            id: '3',
            name: 'Meat & Eggs',
            weight: 1.4,
            imageUrl: require('../../../assets/image/productSelector/product-3.png'),
        },
        {
            id: '4',
            name: 'Drinks',
            weight: 3.978,
            imageUrl: require('../../../assets/image/productSelector/product-4.png'),
        },
    ];

    return (
        <Container>
            <FlatList
                data={lista}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ProductItem item={item} />}
            />
        </Container>
    );
}
