import React from 'react';
import { Wrapper, H } from './styles';

const Hand = ({ hand }) => (
    <Wrapper>
        <H>{`${hand} out of 20`}</H>
    </Wrapper>
);

export default Hand;
