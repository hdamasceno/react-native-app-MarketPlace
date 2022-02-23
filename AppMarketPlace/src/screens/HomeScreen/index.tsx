import React from 'react';
import Elipse from '../../assets/image/GetStartedEllipse.svg';
import {CardCategory} from './CardCategory';
import {CardDesconto} from './CardDesconto';
import {HeaderSection} from './HeaderSection';

import {Container, ContainerElipse, ContainerScroll} from './styles';

export function HomeScreen() {
    return (
        <>
            <ContainerElipse>
                <Elipse />
            </ContainerElipse>
            <Container>
                <HeaderSection />
                <ContainerScroll>
                    <CardDesconto />
                    <CardCategory />
                </ContainerScroll>
            </Container>
        </>
    );
}
