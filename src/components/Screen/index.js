import React from 'react';
import { Wrapper, Overlay } from './styles';

const Screen = (props) => {
    const { children, active } = props;
    return (
        <Wrapper>
            <Overlay active={active} />
            {children}
        </Wrapper>
    );
};

export default Screen;
