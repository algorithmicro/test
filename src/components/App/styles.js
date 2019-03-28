import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: auto;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    
    width: 100%;
    @media(min-width: 320px){
        width: 320px;
    }
    @media (min-width: 768px) {
        width: 768px;
    }
    @media (min-width: 1024px) {
        width: 1024px;
        flex-direction: row;
    }
`;

export default Wrapper;
