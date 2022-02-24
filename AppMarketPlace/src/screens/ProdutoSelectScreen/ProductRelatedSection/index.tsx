import React from 'react';
import {FlatList} from 'react-native';
import {ProductRelatedItem, ProductRelatedProps} from './ProductRelatedItem';

import {Container, Title} from './styles';

export function ProductRelatedSection() {
    const lista: ProductRelatedProps[] = [
        {
            id: '1',
            name: 'Vegetables',
            imageUrl: require('../../../assets/image/productRelated/product-1.png'),
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
            <Title>Produtos Relacionados</Title>
            <FlatList
                data={lista}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ProductRelatedItem item={item} />}
            />
        </Container>
    );
}
