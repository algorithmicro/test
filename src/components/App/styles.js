import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: auto;
    @media(min-width: 320px){
        width: 320px;
    }
    @media (min-width: 768px) {
        width: 768px;
    }
    @media (min-width: 1024px) {
        width: 1024px;
    }
    @media(max-width: 319px){
        width: 100%;
    }
`;

export default Wrapper;
