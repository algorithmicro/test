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

export const GameState = styled.p`
    text-align: center;
    font-size: 30px;
    margin: 30px auto;
    color: ${props => (props.green ? 'green' : 'red')};
`;

export const Button = styled.button`
    border:none;
    border-radius:5px;
    margin:auto;
    text-align:center;
    background-color:orange;
    padding:10px 20px;
    color:#fff;
    display: block;
    cursor: pointer;
`;

export default Wrapper;
