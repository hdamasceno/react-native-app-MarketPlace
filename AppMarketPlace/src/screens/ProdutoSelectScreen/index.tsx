import React from 'react';
import {CartSection} from './CartSection';
import {HeaderSection} from './HeaderSection';
import {ProductDescriptionSection} from './ProductDescriptionSection';
import {ProductRelatedSection} from './ProductRelatedSection';

import {Container} from './styles';

export function ProdutoSelectScreen() {
    return (
        <Container>
            <HeaderSection />
            <ProductDescriptionSection />
            <ProductRelatedSection />
            <CartSection />
        </Container>
    );
}
