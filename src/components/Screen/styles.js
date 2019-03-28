import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;
    margin-bottom: 20px;
    @media(min-width:1024px){
        width:48%;
        margin-bottom: 0;
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.8);
    display: ${props => (props.active ? 'none' : 'block')};
`;
