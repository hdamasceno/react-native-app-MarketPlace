import React from 'react';
import {FlatList} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {SpecialDealItem, SpecialDealProps} from './SpecialDealItem';

import {Container, ContainerHeader, Title, Button, ButtonTitle} from './styles';

export function SpecialDealSection() {
    const lista: SpecialDealProps[] = [
        {
            id: '1',
            name: '',
            imageUrl: require('../../../assets/image/specialDeal/specialDeal1.png'),
        },
        {
            id: '2',
            name: '',
            imageUrl: require('../../../assets/image/specialDeal/specialDeal2.png'),
        },
        {
            id: '3',
            name: '',
            imageUrl: require('../../../assets/image/specialDeal/specialDeal3.png'),
        },
    ];

    return (
        <Container>
            <ContainerHeader>
                <Title>Special Deal</Title>
                <Button>
                    <ButtonTitle>See More</ButtonTitle>
                </Button>
            </ContainerHeader>
            <FlatList
                data={lista}
                horizontal={true}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    paddingBottom: getBottomSpace(),
                }}
                renderItem={({item}) => <SpecialDealItem item={item} />}
            />
        </Container>
    );
}
