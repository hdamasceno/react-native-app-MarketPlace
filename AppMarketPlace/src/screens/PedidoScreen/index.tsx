import React from 'react';
import {CategorySection} from './CategorySection';
import {HeaderSection} from './HeaderSection';

import {Container} from './styles';

export function PedidoScreen() {
    return (
        <Container>
            <HeaderSection />
            <CategorySection />
        </Container>
    );
}
